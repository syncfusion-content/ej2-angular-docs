import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'
import { Component } from '@angular/core';
import { SuccessEventArgs } from '@syncfusion/ej2-inputs';

@Component({
imports: [
         UploaderModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload [asyncSettings]='path'  (success)='onSuccessHandler($event)'></ejs-uploader>
              `
})
export class AppComponent {
    public path: Object = {
      saveUrl: '/api/FileUploader/Save' };
    constructor() {
    }
    public onSuccessHandler(args: SuccessEventArgs) {
        if (args.e !== null) // Check if the event argument is not null
        { 
            const responseText: string = args.e.target.responseText;
            if (responseText.trim() !== "") {

                // for JSON and File Datas
                var jsonResponse = JSON.parse(responseText);
                if (jsonResponse !== null && jsonResponse.hasOwnProperty("Success"))
                {
                    var isSuccess = jsonResponse["Success"];
                    if (isSuccess) {
                        // File upload success
                        const message: string = jsonResponse.hasOwnProperty("Message") ? jsonResponse["Message"] : "File uploaded successfully";
                        // Additional processing as needed
                    }
                }

                // for string Data
                const message: string = responseText;
                // Additional processing as needed
            }
        }
    }
}



