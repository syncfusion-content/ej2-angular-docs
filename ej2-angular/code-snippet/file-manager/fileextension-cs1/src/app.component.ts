


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [showFileExtension]='showFileExtension' (fileLoad)='onBeforeFileLoad($event)' (fileOpen)='onBeforeFileOpen($event)'>
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings?: object;
    public showFileExtension?: boolean;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        // Hides the file extension in File Manager
        this.showFileExtension = false;
    };
    // File Manager's file beforeFileLoad function
    onBeforeFileLoad(args: any) {
        console.log(args.fileDetails.name + " is loading");
    }
    // File Manager's file beforeFileOpen function
    onBeforeFileOpen(args: any) {
        console.log(args.fileDetails.name + " is opened");
    }
}



