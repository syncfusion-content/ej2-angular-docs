


import { Component } from '@angular/core';
import { FileManagerComponent } from '@syncfusion/ej2-angular-filemanager';
import { TabAllModule } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: ` <div class="control-section e-tab-section">
                    <div class="e-sample-resize-container">
                        <!-- Render the Tab Component -->
                        <ejs-tab id="tab_default" heightAdjustMode='Auto' [showCloseButton]='enableClose' >
                                <e-tabitems>
                                    <e-tabitem [header]='headerText[0]'>
                                        <ng-template #content>
                                            <div class="cnt-text" >Overview</div>
                                            The file manager component contains a context menu for performing file operations, large-icons view for displaying the files and folders, and a breadcrumb for navigation. However, these basic functionalities can be extended by using the additional feature modules like toolbar, navigation pane, and details view to simplify the navigation and file operations within the file system.
                                        </ng-template>
                                    </e-tabitem>
                                    <e-tabitem [header]='headerText[1]'>
                                        <ng-template #content>
                                            <div class="cnt-text" >Filemanager with Default Functionalities</div>
                                            <ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings'>
                                            </ejs-filemanager>
                                        </ng-template>
                                    </e-tabitem>
                                </e-tabitems>
                        </ejs-tab>
                    </div>
                </div>`
})
export class AppComponent {
    public headerText: Object | any = [{ text: 'Overview' }, { text: 'FileManager' }];
    public ajaxSettings?: object;
    // Mapping Tab items showCloseButton property
    public enableClose: boolean = true;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
    };
}



