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
        <div id='dropArea' style='height: auto; overflow: auto'>
            <span id='drop'> Drop files here or <a href="" id='browse'><u>Browse</u></a> </span>
               <ejs-uploader #defaultupload [asyncSettings]='path'  [dropArea]='ele'></ejs-uploader>
        </div>
              `
})
export class AppComponent {
    public path: Object = {
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove' };
    public ele?: HTMLElement;
    ngOnInit() {
        this.ele = document.getElementById('dropArea') as HTMLElement;
        (document.getElementById('browse') as HTMLElement).onclick = function() {
        (document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button') as HTMLButtonElement).click();
    return false;
}
        }
    constructor() {
    }
}



