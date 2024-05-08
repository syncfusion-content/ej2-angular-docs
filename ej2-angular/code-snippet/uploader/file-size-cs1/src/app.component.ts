import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'



import { Component, ViewChild } from '@angular/core';
import { UploaderComponent, SelectedEventArgs } from '@syncfusion/ej2-angular-inputs';
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

    public path: Object = {
        saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
    };
  public onSelect(args: SelectedEventArgs): void {
    let totalSize: number = 0;
    for (let file of args.filesData) {
        totalSize = totalSize + file.size;
    }
    let size: string = (this.uploadObj as UploaderComponent).bytesToSize(totalSize);
    alert("Total select file's size is " + size)
}
}


