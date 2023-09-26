


import { Component } from '@angular/core';
import { FileSelectEventArgs } from '@syncfusion/ej2-filemanager';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='multi' [ajaxSettings]='ajaxSettings' [allowMultiSelection]='allowMultiSelection' (fileSelect)='onFileSelect($event)'>
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings?: object;
    public allowMultiSelection?: boolean;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
       this.allowMultiSelection = true;
       }
    // File Manager's file select event function
    onFileSelect(args: FileSelectEventArgs | any) {
        console.log(args.fileDetails.name + " has been " + args.action + "ed");
    }
}



