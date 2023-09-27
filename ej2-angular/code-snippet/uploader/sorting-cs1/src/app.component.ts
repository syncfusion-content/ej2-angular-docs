


import { Component, ViewChild } from '@angular/core';

import { UploaderComponent, SelectedEventArgs, FileInfo } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-root',
    templateUrl: 'default.html',
    styleUrls: ['index.css']
})

export class AppComponent {
   @ViewChild('defaultupload')
    public uploadObj?: UploaderComponent;

    public path: Object = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    };
  public initial:boolean = true;
  public onSelect(args: SelectedEventArgs): void {
    if (this.initial) { this.initial = false; return; }
    args.isModified = true;
    let oldFiles: FileInfo[] = this.uploadObj?.getFilesData() as FileInfo[];
    let filesData: FileInfo[] = args.filesData.concat(oldFiles);
    let modifiedData: FileInfo[] = this.sortFileList(filesData);
    args.modifiedFilesData = modifiedData;
}

public sortFileList(filesData: FileInfo[]): FileInfo[] {
    let files: FileInfo[] = filesData;
    let fileNames: string[] = [];
    for (let i: number = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
    }
    let sortedFileNames: string[] = fileNames.sort();
    let sortedFilesData: FileInfo[] = [];
    let index: number = 0;
    for (let name of sortedFileNames) {
        for (let i: number = 0; i < files.length; i++) {
            if (name === files[i].name) {
                sortedFilesData.push(files[i]);
            }
        }
    }
    return sortedFilesData;
}
}



