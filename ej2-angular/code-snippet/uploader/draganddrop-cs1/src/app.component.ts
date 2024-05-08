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
    template: `        <div id='droparea'> Drop files here to upload </div>
               <ejs-uploader #defaultupload [asyncSettings]='path' autoUpload='false' [dropArea]='ele'></ejs-uploader>
              `
})
export class AppComponent {
    public ele?: HTMLElement;
    public path: Object = {
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove' };
    ngOnInit() {
        this.ele = document.getElementById('droparea') as HTMLElement;
    }
    constructor() {
    }
}


