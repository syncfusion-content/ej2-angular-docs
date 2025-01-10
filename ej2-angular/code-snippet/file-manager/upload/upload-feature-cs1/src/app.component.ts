import { BrowserModule } from '@angular/platform-browser'
import { NgModule,ViewChild } from '@angular/core'
import { FileManagerComponent, FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager'
import { Component } from '@angular/core';

@Component({
    imports: [FileManagerModule],
    providers: [NavigationPaneService, ToolbarService, DetailsViewService],
    standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager #fileManagerInstance id='file-manager' [ajaxSettings]='ajaxSettings' [uploadSettings]='uploadSettings' (created)="onCreated($event)" height="375px">
</ejs-filemanager>`
})
export class AppComponent {
    @ViewChild('fileManagerInstance')
    public fileManagerInstance?: FileManagerComponent;
    public ajaxSettings?: object;
    public uploadSettings?: object;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        // Upload settings customization
        this.uploadSettings = { allowedExtensions: '.jpg,.png', autoClose: false, autoUpload: false, chunkSize: 5242880, minFileSize: 120, maxFileSize: 73728000 };
    };
    onCreated() {
        this.fileManagerInstance.uploadObj.dropArea = null;  // Restrict file uploads by dragging them from the local file system to the File Manager.
    }
}