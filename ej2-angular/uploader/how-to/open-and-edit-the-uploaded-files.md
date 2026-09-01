---
layout: post
title: How to open and edit uploaded files in Angular Uploader | Syncfusion
description: Open and edit Angular Uploader files after upload by capturing the server path in the success event and sending it through an HTTP header to the file handler.
platform: ej2-angular
control: Open and edit the uploaded files 
documentation: ug
domainurl: ##DomainURL##
---

# How to open and edit uploaded files in Angular Uploader

The Uploader component allows you to open and edit files after uploading them to the server. This is accomplished by using the Uploader's `success` event to retrieve the saved file path.

When the upload succeeds, the saved file path returned by the server is stored in a custom `file-path` attribute on the corresponding file list element (matched by the file's `data-file-name` attribute, which holds the uploaded file's display name). When users click a file element, a new request is created with the saved file path passed via an HTTP header. On the server side, retrieve the file path from the header and open the file using the appropriate file handling method.

```typescript
import { Component } from '@angular/core';
import { EmitType } from '@syncfusion/ej2-base';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    standalone: true,
    imports: [UploaderModule],
    selector: 'app-root',
    template: `<div class="control_wrapper"> <ejs-uploader #defaultupload id='fileupload' [asyncSettings]='path' (success)='onUploadSuccess($event)'></ejs-uploader></div>`
})
export class AppComponent {

   public path: Object = {
       saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
       removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
   };
    public onUploadSuccess: EmitType<Object> = (args: any) => {
        let liElements: any = document.body.querySelectorAll('.e-upload-file-list');
        for (let i = 0; i < liElements.length; i++) {
            if (liElements[i].getAttribute('data-file-name') == args.file.name) {
                liElements[i].addEventListener('click', () => { this.openFile(args, event); });
                // File path have to update from server end in response status description.
                liElements[i].setAttribute('file-path', args.e.target.statusText);
            }
        }
   };
   openFile(args: any, e: any) {
    if (!e.target.classList.contains('e-file-delete-btn') && !e.target.classList.contains('e-file-remove-btn'))
    {
        let ajax = new XMLHttpRequest();
        // create new request for open the selected file
        ajax.open("POST", '/Home/openFile');
        let liElements = document.getElementsByClassName('e-upload')[0].querySelectorAll('.e-upload-file-list');
        for (let i = 0; i < liElements.length; i++) {
            if (liElements[i].getAttribute('data-file-name') == args.file.name) {
                // Added the file path in header to get it in server side.
            ajax.setRequestHeader('filePath', liElements[i].getAttribute('file-path').toString());
            }
        }
        ajax.send();
    }
}
}
```

## Server-side implementation

**Note:** The following examples show C# server-side code for file handling. Adapt the implementation based on your server platform.

```csharp
public void Save() {
    if (!System.IO.File.Exists(fileSavePath))
    {
        httpPostedFile.SaveAs(fileSavePath);
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        // Sending the file path to client side
        Response.StatusDescription = fileSavePath;
        Response.End();
    }
}

[AcceptVerbs("Post")]
public void openFile()
{
    // Check whether the file is available in the corresponding location
    if (System.IO.File.Exists(Request.Headers.GetValues("filePath").First()))
    {
        // This will open the selected file from the server location on the server machine
        System.Diagnostics.Process.Start(Request.Headers.GetValues("filePath").First());
    }
}
```

> You can also explore the [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. Explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/uploader/default) to understand how to browse and select the files which you want to upload to the server.
