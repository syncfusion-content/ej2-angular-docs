

import { Component } from '@angular/core';
import { EmitType } from '@syncfusion/ej2-base';
@Component({
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
    public onBeforeUpload: EmitType<Object> = (args: any) => {
        // get the file MIME type
        alert("File MIME type is: " + args.fileData.rawFile.type)
    }
}


