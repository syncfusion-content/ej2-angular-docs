import { Component, ViewEncapsulation } from '@angular/core';
import { FileManagerComponent, NavigationPaneService, ToolbarService, DetailsViewService, VirtualizationService } from '@syncfusion/ej2-angular-filemanager';
/**
 * File Manager virtualization feature sample
 */

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './default.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ NavigationPaneService, ToolbarService, DetailsViewService, VirtualizationService]
})

export class AppComponent {
    public ajaxSettings?: object;
    public view?: string;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        this.view = "Details";
    }

    onBeforeSend(args: any) {
        args.ajaxSettings.beforeSend = function (args: any) {
            args.httpRequest.setRequestHeader('Authorization', 'FileBrowser');
        };
    }
    beforeImageLoad(args: any) {
        args.imageUrl = args.imageUrl + '&rootName=' + 'FileBrowser';
    }
    beforeDownload(args: any) {
        args.data.rootFolderName = 'FileBrowser';
    }
}
