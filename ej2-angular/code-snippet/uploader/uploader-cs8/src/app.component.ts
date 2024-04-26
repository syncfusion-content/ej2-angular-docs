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
               <ejs-uploader #defaultupload  [autoUpload]='false'></ejs-uploader>
              `
})
export class AppComponent {
    constructor() {
    }
}



