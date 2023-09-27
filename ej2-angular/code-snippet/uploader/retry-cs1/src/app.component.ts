


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
      // provided the wrong url to showcase the chunk upload failure related properties.
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploader/Save',
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploader/Remove',
      // set chunk size for enable the chunk upload
      chunkSize: 102400,
      // set count for automatic retry when chunk upload failed
      retryCount: 5,
      // set time delay for automatic retry when chunk upload failed
      retryAfterDelay: 3000

    };
    constructor() {
    }
}



