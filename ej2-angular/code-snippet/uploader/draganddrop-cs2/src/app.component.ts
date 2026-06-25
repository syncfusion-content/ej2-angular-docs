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
               <div id='droparea'>
            Drop files here to upload
        </div>
        <div id='uploadfile' >
               <ejs-uploader #defaultupload  [autoUpload]='false' [dropArea]='dropEle'></ejs-uploader>
               </div>
              `
})
export class AppComponent {
    public dropEle?: HTMLElement | null ;
    ngOnInit() {
          this.dropEle = document.getElementById('droparea');
    }
    constructor() {
    }
}



