---
layout: post
title: How to add additional data on upload in Angular Uploader | Syncfusion
description: Send extra key-value form data with Angular Uploader file uploads by setting customFormData on the uploading event args alongside the file payload.
platform: ej2-angular
control: Add additional data on upload 
documentation: ug
domainurl: ##DomainURL##
---

# How to add additional data on upload in Angular Uploader

The Uploader lets you include additional form data with file uploads. Use the [uploading](https://ej2.syncfusion.com/angular/documentation/api/uploader/index-default#uploading) event and set the `customFormData` argument to send extra key–value pairs to the server. See the example below.

```typescript
import { Component } from '@angular/core';
import { EmitType } from '@syncfusion/ej2-base';
import { UploaderModule, UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';
@Component({
    standalone: true,
    imports: [UploaderModule],
    selector: 'app-root',
    templateUrl: 'default.html',
    styleUrls: ['index.css']
})

export class AppComponent {
    public path: Object = {
        saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
    };

    public onFileUpload: EmitType<UploadingEventArgs> = (args: any) =>  {
        // add additional data as key-value pairs.
        args.customFormData = [{'name': 'Syncfusion INC'}];
    };
}
```

Bind the `path` settings and the `onFileUpload` handler to the Uploader in the component's template (`default.html`):

```html
<ejs-uploader #uploadcontrol id='fileupload' [asyncSettings]='path' (uploading)='onFileUpload($event)'></ejs-uploader>
```

## Server side for adding additional data

The following snippet assumes an ASP.NET Web API controller using the `System.Web` API:

```csharp
    // Get the additional data in server end by corresponding key.
    var data = HttpContext.Current.Request.Form["name"];
```

> You can also explore the [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. Explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse and select the files which you want to upload to the server.
