


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [detailsViewSettings]='detailsViewSettings' [view]='view'>
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings?: object;
    public view?: string;
    public detailsViewSettings?: object;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        // Initial view of File Manager is set to details view
        this.view = "Details";
        // Details View settings customization
        this.detailsViewSettings = {
            columns: [
                {field: 'name', headerText: 'File Name', minWidth: 120, width: 'auto', customAttributes: { class: 'e-fe-grid-name' },template: '${name}'},
                {field: 'size', headerText: 'File Size',minWidth: 50, width: '110', template: '${size}'},
                    { field: '_fm_modified', headerText: 'Date Modified',minWidth: 50, width: '190'}
            ]
        };
    };
}



