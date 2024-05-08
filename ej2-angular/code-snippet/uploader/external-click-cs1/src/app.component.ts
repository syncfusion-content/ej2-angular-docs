import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'



import { Component, AfterViewInit } from '@angular/core';

@Component({
imports: [
         UploaderModule
    ],


standalone: true,
    selector: 'app-root',
    templateUrl: './default.html',
    styleUrls: ['./index.css']
})

export class AppComponent {
    public autoUpload: boolean = false;
    public path: Object = {
        saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
    };
    ngAfterViewInit(): void {
        (document.getElementById('browse') as HTMLElement).onclick = (args) => {
            (document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button') as HTMLButtonElement).click();
        };
    }
}


