---
layout: post
title: Audio in Angular Rich text editor component | Syncfusion
description: Learn here all about Audio in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Audio 
documentation: ug
domainurl: ##DomainURL##
---

# Audio in Angular Rich text editor component

The Rich Text Editor allows you to insert audio from online sources and local computers and then insert them into your content. You can insert the audio with the following list of options in the [insertAudioSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#insertaudiosettings) property.

| Options | Description |
|----------------|---------|
| [allowedTypes](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettings/#allowedtypes) | Specifies the extensions of the audio types allowed to insert on bowering and passing the extensions with comma separators. For example, pass allowedTypes as `.mp3`, `.wav`, `.m4a` and `.wma`. |
| [layoutOption](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettings/#layoutoption) | Sets the default display for audio when it is inserted into the Rich Text Editor. Possible options are `Inline` and `Break`.|
| [saveFormat](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettings/#saveformat) | Sets the default save format of the audio element when inserted. Possible options are: `Blob` and `Base64`.|
| [saveUrl](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettings/#saveurl) | Provides URL to map the action result method to save the audio.|
| [removeUrl](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettings/#removeurl) | Provides URL to map the action result method to remove the audio.|
| [path](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettings/#path) | Specifies the location to store the audio.|

## Configure audio tool in the toolbar

You can add an `audio` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) property.

> Rich Text Editor features are segregated into individual feature-wise modules. In this demo, we have used the following injectable services `ToolbarService`, `LinkService`, `HtmlEditorService`, `AudioService` in the `@NgModule.providers section`.

To configure the `Audio` toolbar item, refer to the below code.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/audio-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/audio-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/audio-cs1" %}

## Insert audio from the web

You can insert audio from either the hosted link or the local machine, by clicking the audio button in the editor's toolbar. On clicking the audio button, a dialog opens, which allows you to insert audio from the web URL.

### Insert from web URL

By default, the audio tool opens the audio dialog, allowing you to insert audio from an online source. Inserting the URL will be added to the `src` attribute of the `<source>` tag.

![Angular Rich Text Editor Audio insert](./images/angular-richtexteditor-audio-web.png)

## Insert audio from local machine

You can use the `browse` option on the audio dialog, to select the audio from the local machine and insert it into the Rich Text Editor content.

If the path field is not specified in the [insertAudioSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#insertaudiosettings), the audio will be converted into the `Blob` URL or `Base64` and inserted inside the Rich Text Editor.

### Restrict audio upload based on size

You can restrict the audio uploaded from the local machine when the uploaded audio file size is greater than the allowed size by using the [fileUploading](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fileuploading) event.

> The file size in the argument will be returned in `bytes`.

In the following illustration, the audio size has been validated before uploading, and it is determined whether the audio has been uploaded or not.

```typescript

import { Component } from '@angular/core';
import { ToolbarService, QuickToolbarService, LinkService, HtmlEditorService, AudioService } from '@syncfusion/ej2-angular-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component( {
    selector: 'app-root',
    template: `<ejs-richtexteditor id='' [toolbarSettings]='toolbarSettings' [insertAudioSettings] = 'insertAudioSettings' (fileUploading) = 'onAudioUpload($event)' >
    </ejs-richtexteditor>`,
    providers: [
        ToolbarService, QuickToolbarService, LinkService, AudioService, HtmlEditorService,
    ],
} )

export class AppComponent {
    public toolbarSettings: object = {
        items: [ 'Audio' ]
    };
    public insertAudioSettings: Object = {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        path: '../Files/'
    };
    public onAudioUpload = ( args: UploadingEventArgs ) => {
        let sizeInBytes: number = args.fileData.size;
        let fileSize: number = 500000;
        if ( fileSize < sizeInBytes ) {
            args.cancel = true;
        }
    }
}

```

### Server-side action

The selected audio can be uploaded to the required destination using the controller action below. Map this method name in [insertAudioSettings.saveUrl](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettingsModel/#saveurl) and provide the required destination path through [insertAudioSettings.path](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettingsModel/#path) properties.

> If you want to insert lower-sized audio files in the editor and don't want a specific physical location for saving the audio, you can opt to save the format as `Base64`.

In the following code blocks, the audio module has been injected and can insert the audio files saved in the specified path.

```typescript

import { Component } from '@angular/core';
import { ToolbarService, QuickToolbarService, LinkService, HtmlEditorService, AudioService } from '@syncfusion/ej2-angular-richtexteditor';

@Component( {
    selector: 'app-root',
    template: `<ejs-richtexteditor id='' [toolbarSettings]='toolbarSettings' [insertAudioSettings] = 'insertAudioSettings' >
    </ejs-richtexteditor>`,
    providers: [
        ToolbarService, QuickToolbarService, LinkService, AudioService, HtmlEditorService,
    ],
} )

export class AppComponent {
    public toolbarSettings: object = {
        items: [ 'Audio' ]
    };
    public insertAudioSettings: Object = {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
        path: "[SERVICE_HOSTED_PATH]/Files/"
    };
}

```

```csharp

using System;
using System.IO;
using FileUpload.Models;
using System.Diagnostics;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;

namespace FileUpload.Controllers
{
    public class HomeController : Controller
    {
        private IHostingEnvironment hostingEnv;

        public HomeController(IHostingEnvironment env)
        {
            hostingEnv = env;
        }

        public IActionResult Index()
        {
            return View();
        }

        [AcceptVerbs("Post")]
        public void SaveFiles(IList<IFormFile> UploadFiles)
        {
            try
            {
                foreach (IFormFile file in UploadFiles)
                {
                    if (UploadFiles != null)
                    {
                        string filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                        filename = hostingEnv.WebRootPath + "\\Files" + $@"\{filename}";

                        // Create a new directory, if it does not exists
                        if (!Directory.Exists(hostingEnv.WebRootPath + "\\Files"))
                        {
                            Directory.CreateDirectory(hostingEnv.WebRootPath + "\\Files");
                        }

                        if (!System.IO.File.Exists(filename))
                        {
                            using (FileStream fs = System.IO.File.Create(filename))
                            {
                                file.CopyTo(fs);
                                fs.Flush();
                            }
                            Response.StatusCode = 200;
                        }
                    }
                }
            }
            catch (Exception)
            {
                Response.StatusCode = 204;
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

```

### Audio save format

The audio files can be saved as `Blob` or `Base64` URL by using the [insertAudioSettings.saveFormat](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettingsModel/#saveformat) property, which is of enum type, and the generated URL will be set to the `src` attribute of the `<source>` tag.

> The default `saveFormat` property is set to `Blob` format.

```HTML

<audio>
    <source src="blob:http://ej2.syncfusion.com/3ab56a6e-ec0d-490f-85a5-f0aeb0ad8879" type="audio/mp3" >
</audio>

<audio>
    <source src="data:audio/mp3;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHA" type="audio/mp3" >
</audio>

```

## Replacing audio

Once an audio file has been inserted, you can change it using the Rich Text Editor [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quickToolbarSettings/#quicktoolbarsettings) `audioReplace` option. You can replace the audio file using the web URL or the browse option in the audio dialog.

![Angular Rich Text Editor Audio replace](./images/angular-richtexteditor-audio-replace.png)

## Delete audio

To remove audio from the Rich Text Editor content, select the audio and click the `audioRemove` button from the quick toolbar. It will delete the audio from the Rich Text Editor content as well as from the service location if the [insertAudioSettings.removeUrl](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettingsModel/#removeurl) is given.

Once you select the audio from the local machine, the URL for the audio will be generated. You can remove the audio from the service location by clicking the cross icon.

![Angular Rich Text Editor Audio delete](./images/angular-richtexteditor-audio-del.png)

## Display position

Sets the default display property for audio when it is inserted in the Rich Text Editor using the [insertAudioSettings.layoutOption](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/audioSettingsModel/#layoutOption) property. It has two possible options: `Inline` and `Break`. When updating the display positions, it updates the audio elements’ layout position.

> The default `layoutOption` property is set to `Inline`.

```typescript

import { Component } from '@angular/core';
import { ToolbarService, QuickToolbarService, LinkService, HtmlEditorService, AudioService } from '@syncfusion/ej2-angular-richtexteditor';

@Component( {
    selector: 'app-root',
    template: `<ejs-richtexteditor id='' [toolbarSettings]='toolbarSettings' [insertAudioSettings] = 'insertAudioSettings' >
    </ejs-richtexteditor>`,
    providers: [ ToolbarService, QuickToolbarService, LinkService, AudioService, HtmlEditorService, ],
} )

export class AppComponent {
    public toolbarSettings: object = {
        items: [ 'Audio' ],
    };
    public insertAudioSettings: Object = {
        layoutOption: 'Inline'
    };
}

```

## Rename audio before inserting

You can use the [insertAudioSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#insertaudiosettings) property, to specify the server handler to upload the selected audio. Then by binding the [fileUploadSuccess](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fileuploadsuccess) event, you can receive the modified file name from the server and update it in the Rich Text Editor's insert audio dialog.

```HTML

<ejs-richtexteditor id='' [toolbarSettings]='toolbarSettings' [insertAudioSettings] = 'insertAudioSettings' (fileUploadSuccess) = 'onAudioUploadSuccess($event)' >
<ng-template #valueTemplate>
    <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid <a href="https://ej2.syncfusion.com/home/" target="_blank">HTML markup</a> or <a href="https://ej2.syncfusion.com/home/" target="_blank">markdown</a> of the content</p>
</ng-template>
</ejs-richtexteditor>

```

```typescript

import { Component } from '@angular/core';
import { ToolbarService, QuickToolbarService, LinkService, HtmlEditorService, AudioService,} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  providers: [ ToolbarService, QuickToolbarService, LinkService, AudioService, HtmlEditorService ],
})

export class AppComponent {
    public toolbarSettings: object = {
        items: ['Audio'],
    };
    public insertAudioSettings: Object = {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/Rename",
        path: "[SERVICE_HOSTED_PATH]/Files/"
    };
    public onAudioUploadSuccess = (args: any) => {
            alert("Get the new file name here");
            if( args.e.currenTarget.getResponseHeader('name') != null ){
                args.file.name = args.e.currentTarget.getResponseHeader('name');
                let fileName : any = document.querySelector(".e-file-name")[0];
                fileName.innerHTML = args.fileData.name.replace(document.querySelectorAll(".e-file-type")[0].innerHTML , '');
                fileName.title = args.fileData.name;
            }
    };
}

```

To configure the server-side handler, refer to the below code.

```csharp
int x = 0;
string file;
[AcceptVerbs("Post")]
public void Rename()
{
    try
    {
        var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];
        fileName = httpPostedFile.FileName;
        if (httpPostedFile != null)
        {
            var fileSave = System.Web.HttpContext.Current.Server.MapPath("~/Files");
            if (!Directory.Exists(fileSave))
            {
                Directory.CreateDirectory(fileSave);
            }
            var fileName = Path.GetFileName(httpPostedFile.FileName);
            var fileSavePath = Path.Combine(fileSave, fileName);
            while (System.IO.File.Exists(fileSavePath))
            {
                fileName = "rteFiles" + x + "-" + fileName;
                fileSavePath = Path.Combine(fileSave, fileName);
                x++;
            }
            if (!System.IO.File.Exists(fileSavePath))
            {
                httpPostedFile.SaveAs(fileSavePath);
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.Headers.Add("name", fileName);
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusDescription = "File uploaded succesfully";
                Response.End();
            }
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusCode = 204;
        Response.Status = "204 No Content";
        Response.StatusDescription = e.Message;
        Response.End();
    }
}

```

## Upload audio with authentication

You can add additional data with the audio uploaded from the Rich Text Editor on the client side, which can even be received on the server side by using the [fileUploading](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fileuploading) event and its `customFormData` argument, you can pass parameters to the controller action. On the server side, you can fetch the custom headers by accessing the form collection from the current request, which retrieves the values sent using the POST method.

> By default, it doesn't support the `UseDefaultCredentials` property; we need to manually append the default credentials with the upload request.

```typescript

import { Component } from '@angular/core';
import { ToolbarService, QuickToolbarService, LinkService, HtmlEditorService, AudioService,} from '@syncfusion/ej2-angular-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  template: `<ejs-richtexteditor id='' [toolbarSettings]='toolbarSettings' [insertAudioSettings] = 'insertAudioSettings' (fileUploading) = 'onAudioUpload($event)' >
    </ejs-richtexteditor>`,
  providers: [ ToolbarService, QuickToolbarService, LinkService, AudioService, HtmlEditorService ],
})

export class AppComponent {
  public toolbarSettings: object = {
    items: ['Audio'],
  };
  public insertAudioSettings: Object = {
    saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
    path: "[SERVICE_HOSTED_PATH]/Files/"
  };
  public onAudioUpload = (args: UploadingEventArgs) => {
    let accessToken = "Authorization_token";
    // adding custom form Data
    args.customFormData = [ { 'Authorization': accessToken}];
  };
}

```

```csharp

public void SaveFiles(IList<IFormFile> UploadFiles)
{
    string currentPath = Request.Form["Authorization"].ToString();
}

```

## See Also

* [How to edit the quick toolbar settings](./toolbar/#quick-inline-toolbar)
* [How to use the link editing option in the toolbar items](./link/)