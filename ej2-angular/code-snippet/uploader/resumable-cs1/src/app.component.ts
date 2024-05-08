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
    styleUrls: ['./index.css'],
    template: `<div class="chunkupload">
                 <ejs-uploader #defaultupload  [asyncSettings]='path'></ejs-uploader>
               </div>
              `
})
export class AppComponent {
     public path: Object = {
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove',
      // set chunk size for enable the chunk upload
      chunkSize: 102400
    };
    constructor() {
    }
}



