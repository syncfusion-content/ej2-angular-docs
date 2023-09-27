


import { Component } from '@angular/core';
import { UploadingEventArgs } from '@syncfusion/ej2-inputs';
import { getUniqueID } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload [asyncSettings]='path' autoUpload='false' (uploading)='onUploadBegin($event)'></ejs-uploader>
              `
})
export class AppComponent {
    public path: Object = {
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove' };
    constructor() {
    }
    public onUploadBegin(args: UploadingEventArgs) {
        // check whether the file is uploading from paste.
        if (args.fileData.fileSource === 'paste') {
            let newName: string = getUniqueID(args.fileData.name.substring(0, args.fileData.name.lastIndexOf('.'))) + '.png';
            args.customFormData = [{'fileName': newName}];
        }
    }
}



