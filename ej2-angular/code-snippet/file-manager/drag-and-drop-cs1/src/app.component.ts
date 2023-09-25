


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [allowDragAndDrop]='allowDragAndDrop' (fileDragStart)='onFileDragStart($event)' (fileDragStop)='onFileDragStop($event)' (fileDragging)='onFileDragging($event)' (fileDropped)='onFileDropped($event)' >
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings?: object;
    public allowDragAndDrop?: boolean;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        this.allowDragAndDrop = true;
       };
    // File Manager's file drag start event function
    onFileDragStart(args: any) {
        console.log("File drag start");
    }
    // File Manager's file drag stop event function
    onFileDragStop(args: any) {
        console.log("File drag stop");
    }
    // File Manager's file dragging event function
    onFileDragging(args: any) {
        console.log("File dragging");
    }
    // File Manager's file dropped event function
    onFileDropped(args: any) {
        console.log("File dropped");
    }
}



