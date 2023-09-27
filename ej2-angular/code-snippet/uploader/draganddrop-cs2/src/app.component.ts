


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
               <div id='droparea'>
            Drop files here to upload
        </div>
        <div id='uploadfile' >
               <ejs-uploader #defaultupload  [autoUpload]='false' [dropArea]='dropEle'></ejs-uploader>
               </div>
              `
})
export class AppComponent {
    public dropEle?: HTMLElement ;
    ngOnInit() {
          this.dropEle = document.getElementById('droparea');
    }
    constructor() {
    }
}



