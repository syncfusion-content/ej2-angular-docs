

import { Component, ViewChild } from '@angular/core';
import { EmitType } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
@Component({
    selector: 'app-root',
    templateUrl: './default.html',
    styleUrls: ['./index.css']
})

export class AppComponent {
    @ViewChild('defaultupload')
    public uploadObj?: UploaderComponent;
    public autoUpload: boolean = false;
    public path: Object = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    };
    public onBeforeUpload: EmitType<Object> = (args: any) => {
        // get the file size in bytes
        let sizeInBytes: number = args.fileData.size;
        // get the file size in standard format
        alert("File size is: " + this.uploadObj?.bytesToSize(sizeInBytes));
    }
}


