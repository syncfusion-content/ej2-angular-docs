import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'




import { Component } from '@angular/core';
import { UploadingEventArgs } from '@syncfusion/ej2-inputs';
import { getUniqueID } from '@syncfusion/ej2-base';

@Component({
imports: [
         UploaderModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload [asyncSettings]='path' autoUpload='false' (uploading)='onUploadBegin($event)'></ejs-uploader>
              `
})
export class AppComponent {
    public path: Object = {
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove' };
    constructor() {
    }
    public onUploadBegin(args: UploadingEventArgs) {
        // check whether the file is uploading from paste.
        if (args.fileData.fileSource === 'paste') {
            let newName: string = getUniqueID(args.fileData.name.substring(0, args.fileData.name.lastIndexOf('.'))) + '.png';
            args.customFormData = [{'fileName': newName}];
        }
    }
}



