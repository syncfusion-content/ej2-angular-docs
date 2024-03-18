


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
               <div id='droparea'>
            Drop files here to upload
        </div>
        <div id='uploadfile' >
               <ejs-uploader #defaultupload  [autoUpload]='false' [dropArea]='dropEle' [asyncSettings]='path'></ejs-uploader>
               </div>
              `
})
export class AppComponent {
    public dropEle?: any;
     public path: Object = {
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove' };
    constructor() {
    }
}



