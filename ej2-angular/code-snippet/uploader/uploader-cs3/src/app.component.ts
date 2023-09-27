


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload  [asyncSettings]='path'></ejs-uploader>
              `
})
export class AppComponent {
     public path: Object = {
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save' };
    constructor() {
    }
}



