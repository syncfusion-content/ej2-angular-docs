


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload  [autoUpload]='false'></ejs-uploader>
              `
})
export class AppComponent {
    constructor() {
    }
}



