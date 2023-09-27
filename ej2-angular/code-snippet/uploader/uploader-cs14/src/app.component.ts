


import { Component, ViewChild } from '@angular/core';
import {  FileInfo, SelectedEventArgs } from '@syncfusion/ej2-inputs';
import { detach } from '@syncfusion/ej2-base';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-root',
    template: `
               <ejs-uploader #defaultupload autoUpload='false'  [asyncSettings]='path' minFileSize = 10000 allowedExtensions = '.doc, .docx, .xls, .xlsx' (selected)="onFileSelected($event)" (success)="onUploadSuccess($event)"></ejs-uploader>
              `
})
export class AppComponent {
    public path: Object = {
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove' };
    @ViewChild('defaultupload')
    public uploadObj?: UploaderComponent;
    public onFileSelected(args : SelectedEventArgs) : void {
        // Filter the 5 files only to showcase
        args.filesData.splice(5);
        let filesData : FileInfo[] = (this.uploadObj as UploaderComponent).getFilesData();
        let allFiles : FileInfo[] = filesData.concat(args.filesData);
        if (allFiles.length > 5) {
            for (let i : number = 0; i < allFiles.length; i++) {
                if (allFiles.length > 5) {
                    allFiles.shift();
                }
            }
            args.filesData = allFiles;
            // set the modified custom data
            args.modifiedFilesData = args.filesData;
        }
        args.isModified = true;
    }
    public onUploadSuccess(args: any): void {
        let li: HTMLElement = (this.uploadObj as any).uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
        if (args.operation === 'upload') {
            (li.querySelector('.e-file-delete-btn') as HTMLElement).onclick = () => {
                this.generateSpinner((this.uploadObj as any).uploadWrapper);
            };
            (li.querySelector('.e-file-delete-btn') as HTMLElement).onkeydown = (e: any) => {
                if (e.keyCode === 13) {
                    this.generateSpinner(e.target.closest('.e-upload'));
                }
            };
        } else {
            hideSpinner((this.uploadObj as any).uploadWrapper);
            detach((this.uploadObj as any).uploadWrapper.querySelector('.e-spinner-pane'));
        }
    }
    public generateSpinner(targetElement: HTMLElement): void {
        createSpinner({ target: targetElement, width: '25px' });
        showSpinner(targetElement);
    }
    constructor() {
    }
}



