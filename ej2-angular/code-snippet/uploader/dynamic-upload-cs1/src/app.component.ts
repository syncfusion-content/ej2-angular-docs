import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'



import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
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
    @ViewChild('defaultupload')
    public uploadObj?: UploaderComponent;
    public autoUpload: boolean = false;
    public path: Object = {
        saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
    };
    ngAfterViewInit(): void {
        (document.getElementById('first') as HTMLElement).onclick = (args) => {
            (this.uploadObj as UploaderComponent).upload((this.uploadObj as UploaderComponent).getFilesData()[0]);
        };
        (document.getElementById('full') as HTMLElement).onclick = (args) => {
            this.uploadObj?.upload((this.uploadObj as UploaderComponent).getFilesData());
        };
    }
}


