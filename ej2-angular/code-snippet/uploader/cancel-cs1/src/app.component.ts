


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./index.css'],
    template: `<div class="chunkupload">
                 <ejs-uploader #defaultupload  [asyncSettings]='path'></ejs-uploader>
               </div>
              `
})
export class AppComponent {
     public path: Object = {
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
      // set chunk size for enable the chunk upload
      chunkSize: 102400
    };
    constructor() {
    }
}



