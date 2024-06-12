import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'

import { Component, ViewChild } from '@angular/core';
import { EmitType } from '@syncfusion/ej2-base';
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
    public onBeforeUpload: EmitType<Object> = (args: any) => {
        // get the file size in bytes
        let sizeInBytes: number = args.fileData.size;
        // get the file size in standard format
        alert("File size is: " + this.uploadObj?.bytesToSize(sizeInBytes));
    }
}


