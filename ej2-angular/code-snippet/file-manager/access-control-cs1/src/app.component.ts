import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager'




import { Component } from '@angular/core';

@Component({
imports: [FileManagerModule, ],

providers: [NavigationPaneService, ToolbarService, DetailsViewService],
standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [view]='view'>
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings?: object | any;
    public view?: string;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManagerAccess/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManagerAccess/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManagerAccess/Upload',
            downloadUrl: this.hostUrl + 'api/FileManagerAccess/Download'
        };
        this.view = "Details";
    }
}



