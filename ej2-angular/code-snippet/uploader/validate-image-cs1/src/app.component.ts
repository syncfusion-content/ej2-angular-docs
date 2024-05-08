import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'



import { Component } from '@angular/core';
import { EmitType } from '@syncfusion/ej2-base';
import { SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import {  } from '@syncfusion/ej2-angular-inputs';
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

   public path: Object = {
       saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
       removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
   };
    public onSelected: EmitType<SelectedEventArgs> = (args: any) =>  {
        if (event!.type === 'drop') {
            let allImages: Array<string> = ['png', 'jpg', 'jpeg', 'gif', 'tiff', 'bpg'];
            let files = args.filesData;
            let modifiedFiles = [];
            for (let file of files) {
              if (allImages.indexOf(file.type) === -1) {
                file.status = 'File type is not allowed';
                file.statusCode = '0';
              }
              modifiedFiles.push(file);
            }
            args.isModified = true;
        }
   };
}


