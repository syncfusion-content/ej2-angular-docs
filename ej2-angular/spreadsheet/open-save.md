---
layout: post
title: Open save in Angular Spreadsheet component | Syncfusion
description: Learn here all about Open save in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open save 
documentation: ug
domainurl: ##DomainURL##
---

# Open save in Angular Spreadsheet component

In import an excel file, it needs to be read and converted to client side Spreadsheet model. The converted client side Spreadsheet model is sent as JSON which is used to render Spreadsheet. Similarly, when you save the Spreadsheet, the client Spreadsheet model is sent to the server as JSON for processing and saved. Server configuration is used for this process.

## Open

The Spreadsheet control opens an Excel document with its data, style, format, and more. To enable this feature, set [`allowOpen`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowopen) as `true` and assign service url to the [`openUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#openurl) property.

**User Interface**:

In user interface you can open an Excel document by clicking `File > Open` menu item in ribbon.

The following sample shows the `Open` option by using the [`openUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#openUrl) property in the Spreadsheet control. You can also use the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforeopen) event to trigger before opening an Excel file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs1" %}

Please find the below table for the beforeOpen event arguments.

 | **Parameter** | **Type** | **Description** |
| ----- | ----- | ----- |
| file | FileList or string or File | To get the file stream. `FileList` -  contains length and item index. <br/> `File` - specifies the file lastModified and file name. |
| cancel | boolean | To prevent the open operation. |
| requestData | object |  To provide the Form data. |

> * Use `Ctrl + O` keyboard shortcut to open Excel documents.
> * The default value of the [allowOpen](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowopen) property is `true`. For demonstration purpose, we have showcased the [allowOpen](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowopen) property in previous code snippet.

### Open an excel file using a file uploader 

If you explore your machine to select and upload an excel document using the file uploader, you will receive the uploaded document as a raw file in the [success](https://ej2.syncfusion.com/angular/documentation/api/uploader/#success) event of the file uploader. In this `success` event, you should pass the received raw file as an argument to the Spreadsheet's [open](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#open) method to see the appropriate output.

The following code example shows how to import an excel document using file uploader in spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs7" %}

### Open an external URL excel file while initial load

You can achieve to access the remote excel file by using the [`created`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#created) event. In this event you can fetch the excel file and convert it to a blob. Convert this blob to a file and [`open`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#open) this file by using Spreadsheet component open method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs2" %}

### Open an excel file from blob data

By default, the Spreadsheet component provides an option to browse files from the local file system and open them within the component. If you want to open an Excel file from blob data, you need to fetch the blob data from the server or another source and convert this blob data into a `File` object. Then, you can use the [open](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#open) method in the Spreadsheet component to load that `File` object.

Please find the code to fetch the blob data and load it into the Spreadsheet component below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-from-blobdata-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-from-blobdata-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/open-from-blobdata-cs1" %}

### Open an Excel file located on a server

By default, the Spreadsheet component provides an option to browse files from the local file system and open them within the component. If you want to load an Excel file located on a server, you need to configure the server endpoint to fetch the Excel file from the server location, process it using `Syncfusion.EJ2.Spreadsheet.AspNet.Core`, and send it back to the client side as `JSON data`. On the client side, you should use the [openFromJson](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#openfromjson) method to load that `JSON data` into the Spreadsheet component.

**Server Endpoint**:

```csharp
    public IActionResult Open([FromBody] FileOptions options)
    {
        OpenRequest open = new OpenRequest();
        string filePath = _env.ContentRootPath.ToString() + "\\Files\\" + options.FileName + ".xlsx";
        // Getting the file stream from the file path.
        FileStream fileStream = new FileStream(filePath, FileMode.Open);
        // Converting "MemoryStream" to "IFormFile".
        IFormFile formFile = new FormFile(fileStream, 0, fileStream.Length, "", options.FileName + ".xlsx"); 
        open.File = formFile;
        // Processing the Excel file and return the workbook JSON.
        var result = Workbook.Open(open);
        fileStream.Close();
        return Content(result);
    }

    public class FileOptions
    {
        public string FileName { get; set; } = string.Empty;
    }
```

**Client Side**:

```js

    // Fetch call to server to load the Excel file.
    fetch('https://localhost:{{your_port_number}}/Home/Open', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ FileName: 'Sample' }),
    })
    .then((response) => response.json())
    .then((data) => {
            // Load the JSON data into spreadsheet.
            spreadsheet.openFromJson({ file: data });
    })

```

You can find the server endpoint code to fetch and process the Excel file in this [attachment](https://www.syncfusion.com/downloads/support/directtrac/general/ze/WebApplication1_(1)-880363187). After launching the server endpoint, you need to update the URL on the client side sample as shown below.

```js
// To open an Excel file from the server.
fetch('https://localhost:{{port_number}}/Home/Open')
```

### Open an excel file using a hosted web service in AWS Lambda

Before proceeding with the opening process, you should deploy the spreadsheet open/save web API service in AWS Lambda. To host the open/save web service in the AWS Lambda environment, please refer to the following KB documentation.

[How to deploy a spreadsheet open and save web API service to AWS Lambda](https://support.syncfusion.com/kb/article/17184/how-to-deploy-a-spreadsheet-open-and-save-web-api-service-to-aws-lambda)

After deployment, you will get the AWS service URL for the open and save actions. Before opening the Excel file with this hosted open URL, you need to prevent the default file opening process to avoid getting a corrupted file on the open service end. The spreadsheet component appends the file to the `formData` and sends it to the open service, which causes the file to get corrupted. To prevent this, set the `args.cancel` value to `true` in the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforeopen) event. After that, you will get the selected file in the `beforeOpen` event argument. Then, convert this file into a base64 string and send it to the open service URL using a fetch request.

On the open service end, convert the base64 string back to a file and pass it as an argument to the workbook `Open` method. The open service will process the file and return the spreadsheet data in JSON format. You will then receive this JSON data in the fetch success callback. Finally, use the [openFromJson](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#openfromjson) method to load this JSON data into the spreadsheet component.

The following code example shows how to open an Excel file using a hosted web service in AWS Lambda, as mentioned above.

```ts
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    selector: 'app-root',
    template: `<div class="control-section">
    <ejs-spreadsheet #default [openUrl]="openUrl" (beforeOpen)="beforeOpenHandler($event)">
    </ejs-spreadsheet>
</div>`,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [ SpreadsheetModule, ]
})

export class AppComponent {
    constructor() {
        
    }
    @ViewChild('default')
    public spreadsheetObj: SpreadsheetComponent;
    public openUrl = 'https://xxxxxxxxxxxxxxxxxx.amazonaws.com/Prod/api/spreadsheet/open';
    

    beforeOpenHandler(eventArgs) {
        eventArgs.cancel = true; // To prevent the default open action.
        if (eventArgs.file) {
            const reader = new FileReader();
            reader.readAsDataURL(eventArgs.file);
            reader.onload = () => {
                // Removing the xlsx file content-type.
                const base64Data: any = reader.result.toString().replace('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,', '');
                this.openExcel({
                    file: base64Data,
                    extension: eventArgs.file.name.slice(eventArgs.file.name.lastIndexOf('.') + 1),
                    password: eventArgs.password || ''
                });
            };
        }
    }

    openExcel (requestData) {
        // Fetch call to AWS server for open processing.
        fetch('https://xxxxxxxxxxxxxxxxxx.amazonaws.com/Prod/api/spreadsheet/open', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(requestData)
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((data) => {
            // Loading the JSON data into our spreadsheet.
            if (data.Workbook && data.Workbook.sheets) {
                this.spreadsheetObj.openFromJson({ file: data });
            }
        }).catch((error) => {
            console.log(error);
        });
    };
}
```

```csharp
public IActionResult Open(OpenOptions openOptions)
{
    // Convert the base64 string to bytes array.
    byte[] bytes = Convert.FromBase64String(openOptions.File);
    // Loading the bytes array to stream.
    MemoryStream stream = new MemoryStream(bytes);
    OpenRequest open = new OpenRequest();
    // Converting the stream into FormFile.
    open.File = new FormFile(stream, 0, bytes.Length, "Sample", "Sample." + openOptions.Extension);
    if (string.IsNullOrEmpty(openOptions.Password))
        open.Password = openOptions.Password;
    var result = Workbook.Open(open);
    return Content(result);
}

public class OpenOptions
{
    public string File { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Extension { get; set; } = string.Empty;
}
```

### Open an excel file from Base64 string data

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet component, there is no direct option to open data as a `Base64` string. To achieve this, the `import()` function fetches the `Base64` string, converts it to a Blob, creates a File object from the Blob, and then opens it using the [open](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#open) method in the spreadsheet.

The following code example shows how to open the spreadsheet data as base64 string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/base-64-string/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/base-64-string/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/base-64-string" %}

### Open excel file into a read-only mode

You can open excel file into a read-only mode by using the [`openComplete`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#opencomplete) event. In this event, you must protect all the sheets and lock its used range cells by using [`protectSheet`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#protectsheet) and [`lockCells`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#lockcells) methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs12" %}




### Configure JSON deserialization options

Previously, when opening a workbook JSON object into the Spreadsheet using the [openFromJson](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#openfromjson) method, the entire workbook, including all features specified in the JSON object, was processed and loaded into the Spreadsheet. 

Now, you have the option to selectively ignore some features during the opening of the JSON object by configuring deserialization options and passing them as arguments to the `openFromJson` method. This argument is optional, and if not configured, the entire workbook JSON object will be loaded without ignoring any features.

```ts
spreadsheet.openFromJson({ file: file }, { ignoreStyle: true });
```

| Options | Description |
| ----- | ----- |
| onlyValues |  If **true**, only the cell values will be loaded. |
| ignoreStyle | If **true**, styles will be excluded when loading the JSON data. |
| ignoreFormula | If **true**, formulas will be excluded when loading the JSON data. |
| ignoreFormat | If **true**, number formats will be excluded when loading the JSON data. |
| ignoreConditionalFormat | If **true**, conditional formatting will be excluded when loading the JSON data. |
| ignoreValidation | If **true**, data validation rules will be excluded when loading the JSON data. |
| ignoreFreezePane | If **true**, freeze panes will be excluded when loading the JSON data. |
| ignoreWrap | If **true**, text wrapping settings will be excluded when loading the JSON data. |
| ignoreChart | If **true**, charts will be excluded when loading the JSON data. |
| ignoreImage | If **true**, images will be excluded when loading the JSON data. |
| ignoreNote | If **true**, notes will be excluded when loading the JSON data. |

The following code snippet demonstrates how to configure the deserialization options and pass them as arguments to the openFromJson method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-from-json/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-from-json/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/spreadsheet/open-from-json" %}

### Improving Excel file open performance with parsing options

Opening large Excel files into the Angular Spreadsheet can sometimes lead to slower performance and increased memory usage. This is often caused by the processing of additional elements such as styles and number formats—even when the actual data content is minimal. For example, an Excel file with only a small amount of data but a large number of styled or formatted empty cells can significantly impact load time and memory consumption.

To address this, we've introduced parsing options that allow users to selectively skip non-essential features during the open process. By enabling options like `IgnoreStyle` and `IgnoreFormat`, you can reduce the amount of data processed, resulting in:
* Faster load times
* Lower memory usage
* Smaller JSON responses

These enhancements are especially beneficial for users working with large or complex Excel files, offering a more efficient and responsive experience.

> **Note:** These options are ideal when styles and number formats are not critical to your use case and the focus is on loading the actual data efficiently. 

The code example below demonstrates how to configure the `IgnoreStyle` and `IgnoreFormat` parsing options on the `server-side`.

**Code Snippet:**

**Server-Side Configuration:**
```csharp
public IActionResult Open(IFormCollection openRequest) 
{
    OpenRequest open = new OpenRequest();
    ...
    open.ParseOptions = new WorkbookParseOptions() { 
        IgnoreStyle = true, 
        IgnoreFormat = true
    }; 
    ...
    return Content(Workbook.Open(open)); 
} 
```

### Chunk response processing

When opening large Excel files with many features and data, the server response can become very large. This might cause memory issues or connection problems during data transmission. The `Chunk Response Processing` feature solves this by dividing the server response into smaller parts, called chunks, and sending them to the client in parallel. The client receives these chunks and combines them to load the Excel data smoothly into the spreadsheet.

You can enable this feature by setting the [`chunkSize`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/openSettings/#chunksize) property in the [`openSettings`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#opensettings) object. Set the [`chunkSize`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/openSettings/#chunksize) to a value greater than 0 (in bytes). The [`chunkSize`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/openSettings/#chunksize) defines how large each chunk will be. Make sure your server supports chunked responses to use this feature effectively.

> This feature reduces memory usage on both the server and client, ensuring that resources are managed efficiently during data transmission. By sending smaller parts of data, it prevents connection issues that could occur with large payloads, making the transmission process more reliable. Additionally, it allows large Excel files to be loaded smoothly into the spreadsheet, providing a seamless user experience even with extensive data.

The following code example demonstrates the client-side and server-side configuration required for handling chunk-based responses when opening an Excel file.

**Client Side**:

```typescript
import { OpenSettingsModel, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  imports: [
    SpreadsheetAllModule
  ],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-spreadsheet #spreadsheet [openUrl]="openUrl" [openSettings]="openSettings"></ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;

  public openSettings: OpenSettingsModel = {
    // Specifies the size (in bytes) of each chunk for the server response when opening a document.
    chunkSize: 1000000,
    // Specifies the number of retry attempts for a failed server request when returning the opened file responses in chunks.
    // This ensures reliable handling of temporary network or server disruptions during the chunked response process.
    retryCount: 3,
    // Specifies the delay (in milliseconds) before retrying a failed server request when returning the opened file responses in chunks.
    // This ensures controlled retries in case of temporary network or server disruptions during the chunked response process.
    retryAfterDelay: 500
  }

  public openUrl: string = "https://localhost:{{port_number}}/Home/Open";
}
```

**Server Endpoint**:

```csharp
public IActionResult Open(IFormCollection openRequest)
{
    OpenRequest open = new OpenRequest();
    if (openRequest.Files.Count > 0)
    {
        open.File = openRequest.Files[0];
    }
    Microsoft.Extensions.Primitives.StringValues chunkPayload;
    if (openRequest.TryGetValue("chunkPayload", out chunkPayload))
    {
        // The chunk payload JSON data includes information essential for processing chunked responses.
        open.ChunkPayload = chunkPayload;
    }
    var result = Workbook.Open(open, 150);
    return Content(result);
}
```

The [attachment](https://www.syncfusion.com/downloads/support/directtrac/general/ze/WebApplication1_7-101537213) includes the server endpoint code for handling chunk-based open processing. After launching the server endpoint, update the `openUrl` property of the spreadsheet in the client-side sample with the server URL, as shown below.

```typescript
    // Specifies the service URL for processing the Excel file, converting it into a format suitable for loading in the spreadsheet.
    <ejs-spreadsheet #spreadsheet openUrl="https://localhost:{{port_number}}/Home/Open"></ejs-spreadsheet>
```

### Add custom header during open

You can add your own custom header to the open action in the Spreadsheet. For processing the data, it has to be sent from server to client side and adding customer header can provide privacy to the data with the help of Authorization Token. Through the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforeopen) event, the custom header can be added to the request during open action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs8" %}

### External workbook confirmation dialog

When you open an excel file that contains external workbook references, you will see a confirmation dialog. This dialog allows you to either continue with the file opening or cancel the operation. This confirmation dialog will appear only if you set the `AllowExternalWorkbook` property value to **false** during the open request, as shown below. This prevents the spreadsheet from displaying inconsistent data.

```csharp
public IActionResult Open(IFormCollection openRequest)
    {
        OpenRequest open = new OpenRequest();
        open.AllowExternalWorkbook = false;
        open.File = openRequest.Files[0];
        return Content(Workbook.Open(open));
    }
```

> This feature is only applicable when importing an Excel file and not when loading JSON data or binding cell data.

![External workbook confirmation dialog](./images/external-reference-dialog-alert.png)

## Save

The Spreadsheet control saves its data, style, format, and more as Excel file document. To enable this feature, set [`allowSave`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowsave) as `true` and assign service url to the [`saveUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#saveurl) property.

**User Interface**:

In user interface, you can save Spreadsheet data as Excel document by clicking `File > Save As` menu item in ribbon.

The following sample shows the `Save` option by using the [`saveUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#saveurl) property in the Spreadsheet control. You can also use the [`beforeSave`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforesave) event to trigger before saving the Spreadsheet as an Excel file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs3" %}

Please find the below table for the beforeSave event arguments.

| **Parameter** | **Type** | **Description** |
| ----- | ----- | ----- |
| url | string |  Specifies the save url.  |
| fileName | string | Specifies the file name. |
| saveType | SaveType | Specifies the saveType like Xlsx, Xls, Csv and Pdf. |
| customParams | object | Passing the custom parameters from client to server while performing save operation. |
| isFullPost | boolean | It sends the form data from client to server, when set to true. It fetches the data from client to server and returns the data from server to client, when set to false. |
| needBlobData | boolean | You can get the blob data if set to true. |
| cancel | boolean | To prevent the save operations. |

> * Use `Ctrl + S` keyboard shortcut to save the Spreadsheet data as Excel file.
> * The default value of [allowSave](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowsave) property is `true`. For demonstration purpose, we have showcased the [allowSave](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowsave) property in previous code snippet.
> * Demo purpose only, we have used the online web service url link.

### Save an excel file as blob data

By default, the Spreadsheet component saves the Excel file and downloads it to the local file system. If you want to save an Excel file as blob data, you need to set `needBlobData` property to **true** and `isFullPost` property to **false** in the [beforeSave](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforesave) event of the spreadsheet. Subsequently, you will receive the spreadsheet data as a blob in the [saveComplete](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#savecomplete) event. You can then post the blob data to the server endpoint for saving.

Please find below the code to retrieve blob data from the Spreadsheet component below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/save-as-blobdata-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/save-as-blobdata-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/save-as-blobdata-cs1" %}

### Save an Excel file to a server

By default, the Spreadsheet component saves the Excel file and downloads it to the local file system. If you want to save an Excel file to a server location, you need to configure the server endpoint to convert the spreadsheet data into a file stream and save it to the server location. To do this, first, on the client side, you must convert the spreadsheet data into `JSON` format using the [saveAsJson](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#saveasjson) method and send it to the server endpoint. On the server endpoint, you should convert the received spreadsheet `JSON` data into a file stream using `Syncfusion.EJ2.Spreadsheet.AspNet.Core`, then convert the stream into an Excel file, and finally save it to the server location.

**Client Side**:

```js

    // Convert the spreadsheet workbook to JSON data.
    spreadsheet.saveAsJson().then((json) => {
        const formData = new FormData();
        formData.append('FileName', "Sample");
        formData.append('saveType', 'Xlsx');
        // Passing the JSON data to perform the save operation.
        formData.append('JSONData', JSON.stringify(json.jsonObject.Workbook));
        formData.append('PdfLayoutSettings', JSON.stringify({ FitSheetOnOnePage: false }));
        // Using fetch to invoke the save process.
        fetch('https://localhost:{{your_port_number}}/Home/Save', {
            method: 'POST',
            body: formData
        }).then((response) => {
            console.log(response);
        });
    });

```

**Server Endpoint**:

```csharp

    public string Save(SaveSettings saveSettings)
    {
        ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        try
        {
            
            // Save the workbook as stream.
            Stream fileStream = Workbook.Save<Stream>(saveSettings);
            // Using XLSIO, we are opening the file stream and saving the file in the server under "Files" folder.
            // You can also save the stream file in your server location.
            IWorkbook workbook = application.Workbooks.Open(fileStream);
            string basePath = _env.ContentRootPath + "\\Files\\" + saveSettings.FileName + ".xlsx";
            var file = System.IO.File.Create(basePath);
            fileStream.Seek(0, SeekOrigin.Begin);
            // To convert the stream to file options.
            fileStream.CopyTo(file);
            file.Dispose();
            fileStream.Dispose();
            return string.Empty;
        }
        catch (Exception ex)
        {
            return ex.Message;
        }
    }

```

You can find the server endpoint code to save the spreadsheet data as an Excel file in this [attachment](https://www.syncfusion.com/downloads/support/directtrac/general/ze/WebApplication1_(1)-880363187). After launching the server endpoint, you need to update the URL on the client side sample as shown below.

```js
//To save an Excel file to the server.
fetch('https://localhost:{{port_number}}/Home/Save')
```

### Save an excel file using a hosted web service in AWS Lambda

Before proceeding with the save process, you should deploy the spreadsheet open/save web API service in AWS Lambda. To host the open/save web service in the AWS Lambda environment, please refer to the following KB documentation.

[How to deploy a spreadsheet open and save web API service to AWS Lambda](https://support.syncfusion.com/kb/article/17184/how-to-deploy-a-spreadsheet-open-and-save-web-api-service-to-aws-lambda)

After deployment, you will get the AWS service URL for the open and save actions. Before saving the Excel file with this hosted save URL, you need to prevent the default save action to avoid getting a corrupted excel file on the client end. The save service returns the file stream as a result to the client, which can cause the file to become corrupted. To prevent this, set the `args.cancel` value to `true` in the [`beforeSave`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforesave) event. After that, convert the spreadsheet data into JSON format using the [saveAsJson](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#saveasjson) method in the `beforeSave` event and send it to the save service endpoint URL using a fetch request.

On the server side, the save service will take the received JSON data, pass it to the workbook `Save` method, and return the result as a base64 string. The fetch success callback will receive the Excel file in base64 string format on the client side. Finally, you can then convert the base64 string back to a file on the client end to obtain a non-corrupted Excel file.

The following code example shows how to save an Excel file using a hosted web service in AWS Lambda, as mentioned above.

```ts
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    selector: 'app-root',
    template: `<div class="control-section">
    <ejs-spreadsheet #default [saveUrl]="saveUrl" (beforeSave)="beforeSaveHandler($event)">
    </ejs-spreadsheet>
</div>`,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [ SpreadsheetModule, ]
})

export class AppComponent {
    constructor() {
        
    }
    @ViewChild('default')
    public spreadsheetObj!: SpreadsheetComponent;
    public saveUrl = 'https://xxxxxxxxxxxxxxxxxxxxxxxxx.amazonaws.com/Prod/api/spreadsheet/save';

    public saveInitiated: boolean;
    
    beforeSaveHandler (eventArgs) {
        if (!this.saveInitiated) {
            eventArgs.cancel = true; // Preventing default save action.
            this.saveInitiated = true; // The "beforeSave" event will trigger for "saveAsJson" action also, so we are preventing for the "saveAsJson".
            this.saveAsExcel(eventArgs);
        }
    }

    saveAsExcel(eventArgs) {
        // Convert the spreadsheet workbook to JSON data.
        this.spreadsheetObj.saveAsJson().then(Json => {
            this.saveInitiated = false;
            const formData = new FormData();
            // Passing the JSON data to server to perform save operation.
            formData.append('JSONData', JSON.stringify((Json as any).jsonObject.Workbook));
            formData.append('saveType', 'Xlsx');
            formData.append('fileName', 'Worksheet');
            formData.append('pdfLayoutSettings', '{"fitSheetOnOnePage":false,"orientation":"Portrait"}');
            // Using fetch API to invoke the server for save processing.
            fetch('https://xxxxxxxxxxxxxxxxxxxxxxxxx.amazonaws.com/Prod/api/spreadsheet/save', {
                method: 'POST', body: formData
            }).then(response => {
                if (response.ok) {
                    return response.blob();
                }
            }).then(data => {
                const reader = new FileReader();
                reader.onload = function () {
                    //Converts the result of the file reading operation into a base64 string.
                    const textBase64Str = reader.result.toString();
                    //Converts the base64 string into a Excel base64 string.
                    const excelBase64Str = atob(textBase64Str.replace('data:text/plain;base64,', ''));
                    //Converts the Excel base64 string into byte characters.
                    const byteCharacters = atob(excelBase64Str.replace('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,', ''));
                    const byteArrays = [];
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteArrays.push(byteCharacters.charCodeAt(i));
                    }
                    const byteArray = new Uint8Array(byteArrays);
                    //creates a blob data from the byte array with xlsx content type.
                    const blobData = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                    const blobUrl = URL.createObjectURL(blobData);
                    const anchor = document.createElement('a');
                    anchor.download = 'Sample.xlsx';
                    anchor.href = blobUrl;
                    document.body.appendChild(anchor);
                    anchor.click();
                    URL.revokeObjectURL(blobUrl);
                    document.body.removeChild(anchor);
                }
                reader.readAsDataURL(data);
            });
        });        
    };
}
```

```csharp
public string Save([FromForm]SaveSettings saveSettings)
{
    // This will return the Excel in base64 string format.
    return Workbook.Save<string>(saveSettings);
}
```

### Save data as a Base64 string

In the Spreadsheet component, there is currently no direct option to save data as a `Base64` string. You can achieve this by saving the Spreadsheet data as blob data and then converting that saved blob data to a `Base64` string using `FileReader`. 

> You can get the Spreadsheet data as blob in the [saveComplete](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#savecomplete) event when you set the  `needBlobData` as **true** and `isFullPost` as **false** in the [beforeSave](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforesave) event.

The following code example shows how to save the spreadsheet data as base64 string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/base-64-string/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/base-64-string/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/base-64-string" %}

### Configure JSON serialization options

Previously, when saving the Spreadsheet as a workbook JSON object using the [saveAsJson](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#saveasjson) method, the entire workbook with all loaded features were processed and saved as a JSON object. 

Now, you have the option to selectively ignore some features while saving the Spreadsheet as a JSON object by configuring serialization options and passing them as arguments to the `saveAsJson` method. This argument is optional, and if not configured, the entire workbook JSON object will be saved without ignoring any features.

```ts
spreadsheet.saveAsJson({ onlyValues: true });
```

| Options | Description |
| ----- | ----- |
| onlyValues |  If **true**, includes only the cell values in the JSON output. |
| ignoreStyle | If **true**, excludes styles from the JSON output. |
| ignoreFormula | If **true**, excludes formulas from the JSON output. |
| ignoreFormat | If **true**, excludes number formats from the JSON output. |
| ignoreConditionalFormat | If **true**, excludes conditional formatting from the JSON output. |
| ignoreValidation | If **true**, excludes data validation rules from the JSON output. |
| ignoreFreezePane | If **true**, excludes freeze panes from the JSON output. |
| ignoreWrap | If **true**, excludes text wrapping settings from the JSON output. |
| ignoreChart | If **true**, excludes charts from the JSON output. |
| ignoreImage | If **true**, excludes images from the JSON output. |
| ignoreNote | If **true**, excludes notes from the JSON output. |

The following code snippet demonstrates how to configure the serialization options and pass them as arguments to the saveAsJson method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/save-as-json/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/save-as-json/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/spreadsheet/save-as-json" %}

### Send and receive custom params from client to server

Passing the custom parameters from client to server by using [`beforeSave`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforesave) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs4" %}

Server side code snippets:

```csharp

    public IActionResult Save(SaveSettings saveSettings, string customParams)
        {
            Console.WriteLine(customParams); // you can get the custom params in controller side
            return Workbook.Save(saveSettings);
        }
```

### Add custom header during save

You can add your own custom header to the save action in the Spreadsheet. For processing the data, it has to be sent from client to server side and adding customer header can provide privacy to the data with the help of Authorization Token. Through the [`fileMenuItemSelect`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#filemenuitemselect) event, the custom header can be added to the request during save action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs11" %}

### Change the PDF orientation

By default, the PDF document is created in **Portrait** orientation. You can change the orientation of the PDF document by using the `args.pdfLayoutSettings.orientation` argument settings in the [`beforeSave`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#beforesave) event.

The possible values are:

* **Portrait** - Used to display content in a vertical layout.
* **Landscape** - Used to display content in a horizontal layout.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs6" %}




### Methods

To save the Spreadsheet document as an `xlsx, xls, csv, or pdf` file, by using [save](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#save) method should be called with the `url`, `fileName` and `saveType` as parameters. The following code example shows to save the spreadsheet file as an `xlsx, xls, csv, or pdf` in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs5" %}

## Server Configuration

In Spreadsheet control, Excel import and export support processed in `server-side`, to use importing and exporting in your projects, it is required to create a server with any of the following web services.

* WebAPI
* WCF Service
* ASP.NET MVC Controller Action

The following code snippets shows server configuration using `WebAPI` service,

```csharp

    [Route("api/[controller]")]
    public class SpreadsheetController : Controller
    {
        //To open excel file
        [AcceptVerbs("Post")]
        [HttpPost]
        [EnableCors("AllowAllOrigins")]
        [Route("Open")]
        public IActionResult Open(IFormCollection openRequest)
        {
            OpenRequest open = new OpenRequest();
            open.File = openRequest.Files[0];
            return Content(Workbook.Open(open));
        }

        //To save as excel file
        [AcceptVerbs("Post")]
        [HttpPost]
        [EnableCors("AllowAllOrigins")]
        [Route("Save")]
        public IActionResult Save([FromForm]SaveSettings saveSettings)
        {
            return Workbook.Save(saveSettings);
        }
    }
```

## Server Dependencies

Open and save helper functions are shipped in the Syncfusion.EJ2.Spreadsheet package, which is available in Essential Studio<sup style="font-size:70%">&reg;</sup> and [`nuget.org`](https://www.nuget.org/). Following list of dependencies required for Spreadsheet open and save operations.

* Syncfusion.EJ2
* Syncfusion.EJ2.Spreadsheet
* Syncfusion.Compression.Base
* Syncfusion.XlsIO.Base

And also refer [this](https://ej2.syncfusion.com/aspnetcore/documentation/spreadsheet/open-save#server-dependencies) for more information.

## Supported File Formats

The following list of Excel file formats are supported in Spreadsheet:

* Microsoft Excel (.xlsx)
* Microsoft Excel 97-2003 (.xls)
* Comma Separated Values (.csv)

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Filtering](./filter)
* [Sorting](./sort)
* [Hyperlink](./link)
* [Docker Image](./docker-deployment)