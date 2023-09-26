


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [enablePersistence]='enablePersistence' (success)='onAjaxSuccess($event)' (failure)='onAjaxFailure($event)'>
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings?: object;
    public enablePersistence?: boolean;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        this.enablePersistence = true;
    };
    // File Manager's file onSuccess function
    onAjaxSuccess(args: any) {
        console.log("Ajax request successful");
    }
    // File Manager's file onError function
    onAjaxFailure(args: any) {
        console.log("Ajax request has failed");
    }
}



