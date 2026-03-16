---
layout: post
title: Async in Angular Uploader component | Syncfusion
description: Learn here all about Async in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Async 
documentation: ug
domainurl: ##DomainURL##
---

# Asynchronous file upload in Angular Uploader component

The Uploader component supports asynchronous file uploads to the server.
The upload process requires save and remove action URLs to manage file operations on the server.

    *   The save action is necessary to handle the upload operation.
    *   The remove action is optional, one can handle the removed files from server.

The File can be upload automatically or manually. For more information, you can refer to the `Auto Upload` section from the documentation.

## Multiple file upload

By default, the Uploader component allows you to select and upload multiple files simultaneously.
The selected files are displayed in a list and persist until you clear them by clicking the clear button in the footer. The `multiple` attribute is added to the input element to enable multiple file selection. The following example demonstrates multiple file upload configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs1" %}

## Single file upload

You can select and upload a single file by disabling the multiple file selection property.
When single file upload is enabled, the previously selected file is replaced with each new selection, ensuring only one file exists in the list.
The `multiple` attribute is removed from the input element to restrict file selection to a single file.

The following example demonstrates single file upload configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs2" %}

## Save action

The save action handler processes file uploads specified in the `saveUrl` property.
The save handler receives submitted files and manages the save operation on the server.
After successfully uploading files to the server, the file name text color changes to green and the remove icon changes to a delete icon.

* When a file uploads successfully, the `success` event is triggered to handle post-upload operations.
* When a file fails to upload, the `failure` event is triggered with details about the error.

You can cancel the upload process by setting the `cancel` property of the event argument to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs3" %}

### Server-side configuration for save action

Here’s how to handle the server-side action for saving the file in server.

```csharp
public async Task<IActionResult> Save(IFormFile UploadFiles)
{
    if (UploadFiles.Length > 0)
    {
        if (!Directory.Exists(uploads)) // Create the directory if not exists
        {
            Directory.CreateDirectory(uploads);
        }

        var filePath = Path.Combine(uploads, UploadFiles.FileName); // Get the file path
        using (var fileStream = new FileStream(filePath, FileMode.Create)) // Create the file
        {
            await UploadFiles.CopyToAsync(fileStream); // Save the file
        }
    }
    return Ok();
}

```

### Server-side configuration for saving and returning responses

The following example demonstrates the server-side action for saving files on the server and returning responses in JSON, String, and File formats.

```c#
[AcceptVerbs("Post")]
public IActionResult Save()
{
    // for JSON Data
    try
     {
        // Process uploaded data
        var responseData = new
        {
            Success = true,
            Message = "Files uploaded successfully",
            // Additional data can be added here
        };

        return Json(responseData);
     }
     catch (Exception e)
     {
         var errorResponse = new
         {
            Success = false,
            Message = "File upload failed: " + e.Message
         };

         return Json(errorResponse);
     }

    // for String Data
    try
    {
        // Process string data
        var data = "success";
        // Return the string data
        return Content(data);
    }
    catch (Exception)
    {
        var data = "failed";
        return Content(data);
    }

    // for File Data
    try
    {
        // Example: Retrieve file path for stream.txt
        var filePath = "stream.txt"; // Example file path
        
        // Get full file path
        var fullPath = Path.GetFullPath(filePath);

        // Return the file
        return PhysicalFile(fullPath, "text/plain");
    }
    catch (Exception e)
    {
        // Handle file retrieval failure
        return Content("Failed to retrieve file response: " + e.Message, "text/plain");
    }
}

```

### Client-side configuration for saving and returning responses

The following example demonstrates the client-side action for saving files on the server and returning responses in JSON, String, and File formats.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## Remove action

The remove action is optional. Specify the URL to handle the removal of files from the server. The remove handler receives file information and processes the deletion operation on the server.

* When files are successfully removed from the server, the `success` event is triggered to confirm the operation is complete.
* When a remove operation fails, the `failure` event is triggered with details about the error.

> You can differentiate between save and remove operations by checking the `operation` property in the `success` or `failure` event arguments.

You can remove files that have not been uploaded to the server by clicking the remove icon.
In this case, the `success` or `failure` events are not triggered.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs4" %}

### Server-side configuration for remove action

To remove an uploaded file from the server, it is sufficient to send only the file name. You can achieve this by setting the [`postRawFile`](https://ej2.syncfusion.com/angular/documentation/api/uploader/removingEventArgs/#postrawfile) property of the `RemovingEventArgs` to `false` during the [`removing`](https://ej2.syncfusion.com/angular/documentation/api/uploader#removing) event. This ensures that only the file name is sent to the server in the Remove action.

Here is an example:

```html
<ejs-uploader [asyncSettings]='path' (removing)='onFileRemove($event)'></ejs-uploader>
```

```typescript
public onFileRemove(args: RemovingEventArgs): void {
    args.postRawFile = false;
}
```
Here’s how to handle the server-side action for removing the file from server.

```csharp
public void Remove(string UploadFiles)
{
    if (UploadFiles != null)
    {
        var filePath = Path.Combine(uploads, UploadFiles);
        if (System.IO.File.Exists(filePath))
        {
            System.IO.File.Delete(filePath); // Delete the file
        }
    }
}
```

When `postRawFile` is enabled, the complete file data will be sent to the server-side `Remove` action. The `postRawFile` option is enabled by default.

Here is an example:

```html
<ejs-uploader [asyncSettings]='path' (removing)='onFileRemove($event)'></ejs-uploader>
```

```typescript
public onFileRemove(args: RemovingEventArgs): void {
     // The `postRawFile` option is enabled by default.
}
```

Here’s how to receive the file data in the server-side `Remove` action:

```csharp
public void Remove(IFormFile UploadFiles)
{
    // Your file removal logic goes here!
}
```

## Auto upload

By default, the uploader processes the files to upload once the files are selected and added in upload queue.
To upload manually, disable the `autoUpload` property.
When you disable this property, you can use the action buttons to call upload all or clear all actions manually.
You can change those buttons text using the `buttons` property in the Uploader component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs5" %}

## Sequential Upload

By default, the uploader component process multiple files to upload simultaneously. When you enable the [sequentialUpload](https://ej2.syncfusion.com/angular/documentation/api/uploader/#sequentialupload) property, the selected files will process sequentially (one after the other) to the server. If the file uploaded successfully or failed, the next file will upload automatically in this sequential upload. This feature helps to reduce the upload traffic and reduce the failure of file upload.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/sequential-upload-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/sequential-upload-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/sequential-upload-cs1" %}

## Preloaded files

The uploader component allows you to preloaded the list of files that are uploaded in the server.
The preloaded files are useful to view and remove the files from server that can be achieved by the `files` property.
By default, the files are configured with uploaded successfully state on rendering file list.
The following properties are mandatory to configure the preloaded files:

    *   Name
    *   Size
    *   Type

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs6" %}

## Adding additional HTTP headers with upload action

The Uploader component allows you to add the additional headers with `save` and `remove` action request using `uploading` and `removing` event, which helps to send validation token on file upload. Access the current request and set the request header within these events.

The following code block shows how to add the additional headers with save and remove action request.

```typescript

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload [asyncSettings]='path' autoUpload='false' (uploading) = "addHeaders($event)" (removing) = "addHeaders($event)"></ejs-uploader>
              `
})
export class AppComponent {
    public path: Object = {
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove' };
    constructor() {
    }

    public addHeaders(args: any) {
        args.currentRequest.setRequestHeader('custom-header', 'Syncfusion');
    }
}

```

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.

## See Also

* [How to add additional data on upload](./how-to/add-additional-data-on-upload)
* [How to add confirm dialog to remove the files](./how-to/add-confirm-dialog-to-remove-the-files)
* [Check the MIME type of file before uploading it](./how-to/check-the-mime-type-of-file-before-upload-it)
* [How to open and edit the uploaded files](./how-to/open-and-edit-the-uploaded-files)

N> [View Server Side Sample in GitHub](https://github.com/SyncfusionExamples/aspcore-uploader-webservices).
