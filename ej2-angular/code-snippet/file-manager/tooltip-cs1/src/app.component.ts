


import { Component, ViewChild } from '@angular/core';
import { FileManagerComponent, FileLoadEventArgs} from '@syncfusion/ej2-angular-filemanager';
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-angular-popups';
import { getValue, select } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: ` <div class="filemanagerContainer">
                    <ejs-filemanager id='file-manager' #fileObj [ajaxSettings]='ajaxSettings' (fileLoad)="fileLoad($event)">
                    </ejs-filemanager>
                </div>`
})
export class AppComponent {
    @ViewChild('fileObj',{ static: true })
    public fileObj?: FileManagerComponent;
    public ajaxSettings?: object;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
       };

    fileLoad (args: FileLoadEventArgs) {
        //Native tooltip customization to display additonal information in new line
        let target: Element = args.element as Element;
        if (args.module==='DetailsView') {
            let element: Element = select('[title]', args.element);
            let title: string = getValue('name', args.fileDetails) +
                '\n' + getValue('dateModified', args.fileDetails);
            element.setAttribute('title', title);
        } else if (args.module==='LargeIconsView') {
            let title: string = getValue('name', args.fileDetails) +
                '\n' + getValue('dateModified', args.fileDetails);
            target.setAttribute('title', title);
        }
    }
}



