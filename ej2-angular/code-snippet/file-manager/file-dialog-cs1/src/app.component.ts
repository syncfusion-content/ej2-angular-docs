


import { Component , ViewChild, Inject} from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { FileManagerComponent, FileOpenEventArgs } from '@syncfusion/ej2-angular-filemanager';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<div class="sample-container">
                    <div id='uploadFileManager' class="fileupload">
                        <ejs-uploader #uploadObj id='defaultfileupload'></ejs-uploader>
                        <button ejs-button id='openBtn' (click)="btnClick()">File Browser</button>
                    </div>
                    <div id='target' class="control-section">
                        <ejs-dialog #dialogObj id='dialog' [visible]='visible' [header]='dialogHeader' [animationSettings]='animationSettings' [showCloseIcon]='showCloseIcon' (open)="dialogOpen()" (close)="dialogClose()" 
                            [target]='target' [width]='dialogWidth'>
                            <ejs-filemanager #filemanagerObj id='filemanager' [ajaxSettings]='ajaxSettings' [toolbarSettings]='toolbarSettings' [contextMenuSettings]='contextMenuSettings' [allowMultiSelection]='false' (fileOpen)="onFileOpen($event)">
                            </ejs-filemanager>
                        </ejs-dialog>
                    </div>
                </div>`
})
export class AppComponent {
    @ViewChild('uploadObj')
    public uploadObj?: UploaderComponent;
    @ViewChild('dialogObj')
    public dialogObj?: DialogComponent;
    @ViewChild('filemanagerObj')
    public filemanagerObj?: FileManagerComponent;
    public dialogHeader = 'Select a file';
    public animationSettings: Object = { effect: 'None' };
    public showCloseIcon = true;
    public target = '#target';
    public visible = false;
    public dialogWidth = '850px';
    public ajaxSettings?: object;
    public contextMenuSettings?: object;
    public toolbarSettings?: object;
    public hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    public contextmenuItems: string[] = ['Open', '|', 'Cut', 'Copy', 'Delete', 'Rename', '|', 'Details'];

    public btnClick: EmitType<object> = () => {
        this.dialogObj?.show();
        this.dialogOpen();
        (this.filemanagerObj as FileManagerComponent).path = '/';
        (this.filemanagerObj as FileManagerComponent).selectedItems = [];
        (this.filemanagerObj as FileManagerComponent).refresh();
    }

    // Uploader will be hidden, if Dialog is opened
    public dialogOpen: EmitType<object> = () => {
        (document.getElementById('uploadFileManager') as HTMLElement).style.display = 'none';
    }
    // Uploader will be shown, if Dialog is closed
    public dialogClose: EmitType<object> = () => {
        (document.getElementById('uploadFileManager') as HTMLElement).style.display = 'block';
    }

    // File Manager's fileOpen event function
    public onFileOpen(args: FileOpenEventArgs): void {
        let file = (args as any).fileDetails;
        if (file.isFile) {
            args.cancel = true;
            if (file.size <= 0 ) { file.size = 10000; }
            (this.uploadObj as UploaderComponent).files = [{name: file.name, size: file.size, type: file.type }];
            this.dialogObj?.hide();
        }
    }

    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        this.toolbarSettings = {
            items: ['NewFolder', 'Upload', 'Delete', 'Cut', 'Copy', 'Rename', 'SortBy', 'Refresh', 'Selection', 'View', 'Details']
        };
        this.contextMenuSettings = {
            file: this.contextmenuItems,
            folder: this.contextmenuItems
        };
        (this.uploadObj as UploaderComponent).autoUpload = true;
    }

    public ngOnDestroy(): void {
        if ((document.querySelector('.sb-demo-section') as Element).classList.contains('upload-dialog')) {
            (document.querySelector('.sb-demo-section') as Element).classList.remove('upload-dialog');
        }
    }
}



