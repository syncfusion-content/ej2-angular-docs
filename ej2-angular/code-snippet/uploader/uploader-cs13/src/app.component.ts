


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload  [asyncSettings]='path' minFileSize = 10000 maxFileSize = 1500000></ejs-uploader>
              `
})
export class AppComponent {
     public path: Object = {
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove' };
    constructor() {
    }
}



