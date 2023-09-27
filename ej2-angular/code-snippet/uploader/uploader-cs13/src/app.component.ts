


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload  [asyncSettings]='path' minFileSize = 10000 maxFileSize = 1500000></ejs-uploader>
              `
})
export class AppComponent {
     public path: Object = {
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove' };
    constructor() {
    }
}



