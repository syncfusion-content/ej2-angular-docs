


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload [autoUpload]='false' [dropArea]='dropEle' [asyncSettings]='path' (success)="onUploadSuccess($event)" (failure)="onUploadFailure($event)"></ejs-uploader>
              `
})
export class AppComponent {

    public path: Object = {
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove' };
      public onUploadSuccess(args: any): void  {
        if (args.operation === 'upload') {
            console.log('File uploaded successfully');
        }
    }

    public onUploadFailure(args: any): void  {
    console.log('File failed to upload');
    }

    public dropEle?: HTMLElement ;
    ngOnInit() {
        this.dropEle = document.getElementById('droparea') as HTMLElement;
    }

    constructor() {
    }
}



