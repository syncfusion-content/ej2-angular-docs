import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'




import { Component } from '@angular/core';

@Component({
imports: [
         UploaderModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload [autoUpload]='false' [dropArea]='dropEle' [asyncSettings]='path' (success)="onUploadSuccess($event)" (failure)="onUploadFailure($event)"></ejs-uploader>
              `
})
export class AppComponent {

    public path: Object = {
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove' };
      public onUploadSuccess(args: any): void  {
        if (args.operation === 'upload') {
            console.log('File uploaded successfully');
        }
    }

    public onUploadFailure(args: any): void  {
    console.log('File failed to upload');
    }

    public dropEle?: HTMLElement ;
    ngOnInit() {
        this.dropEle = document.getElementById('droparea') as HTMLElement;
    }

    constructor() {
    }
}



