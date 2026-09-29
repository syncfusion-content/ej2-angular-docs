import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager'
import { Component } from '@angular/core';

@Component({
    imports: [FileManagerModule,],
    providers: [NavigationPaneService, ToolbarService, DetailsViewService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [enableRtl]='enableRtl' height="375px">
    </ejs-filemanager>`
})

export class App {
    public ajaxSettings?: object;
    public enableRtl?: boolean;
    public hostUrl: string = 'https://physical-service.syncfusion.com/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        this.enableRtl = true;
    };
}

