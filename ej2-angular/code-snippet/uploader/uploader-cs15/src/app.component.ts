import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'




import { Component, ViewChild } from '@angular/core';
import {  FileInfo } from '@syncfusion/ej2-inputs';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
         UploaderModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload autoUpload='false'  [asyncSettings]='path' (selected)="onFileSelect($event)" ></ejs-uploader>
              `
})
export class AppComponent {
    public path: Object = {
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove' };
    @ViewChild('defaultupload')
    public uploadObj?: UploaderComponent;
    public onFileSelect(args : any) {
    let existingFiles: FileInfo[] = (this.uploadObj as any).getFilesData();
    for (let i: number = 0; i < args.filesData.length; i++) {
        for(let j: number = 0; j < existingFiles.length; j++) {
            if (!isNullOrUndefined(args.filesData[i])) {
                if (existingFiles[j].name == args.filesData[i].name) {
                    args.filesData.splice(i, 1);
                }
            }
        }
    }
    existingFiles = existingFiles.concat(args.filesData);
    args.modifiedFilesData = existingFiles;
    args.isModified = true;
}
    constructor() {
    }
}



