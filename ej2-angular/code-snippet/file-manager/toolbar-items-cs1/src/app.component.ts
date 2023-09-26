


import { Component, ViewChild } from '@angular/core';
import { FileManager } from '@syncfusion/ej2-filemanager';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: ` <button ejs-button id="enable" cssClass="e-success">Enable New Folder toolbar item</button>
                <button ejs-button id="disable" cssClass="e-danger">Disable New Folder toolbar item</button>
                <br />
                <br />
                <ejs-filemanager id='file-manager' #fileManager [ajaxSettings]='ajaxSettings' [height]='height' (created)='onCreated($event)'  >
                </ejs-filemanager>`
})
export class AppComponent {
    @ViewChild('fileManager')
    public fileManagerInstance?: FileManager;
    public ajaxSettings?: object;
    public height?: number;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        this.height = 330;
       };
    onCreated(args: any) {
        // Click event for enable button
        (document.getElementById("enable") as HTMLElement).addEventListener('click', (event) => {
            // Enable new folder toolbar item
            (this.fileManagerInstance as FileManager).enableToolbarItems(["newfolder"]);
        }); 
        // Click event for disable button
        (document.getElementById("disable") as HTMLElement).addEventListener('click', (event) => {
            // Disable new folder toolbar item
            (this.fileManagerInstance as FileManager).disableToolbarItems(["newfolder"]);
        });
    }
}



