import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FileManagerModule,NavigationPaneService, ToolbarService, DetailsViewService  } from '@syncfusion/ej2-angular-filemanager'




import { Component } from '@angular/core';

@Component({
imports: [FileManagerModule, ],

providers:[NavigationPaneService, ToolbarService, DetailsViewService],
standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [toolbarSettings]='toolbarSettings' height="375px">
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings?: object;
    public toolbarSettings?: object;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        // Toolbar settings customization
        this.toolbarSettings = { items: ['NewFolder', 'Refresh', 'View', 'Details'], visible: true};
    };
}



