import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ViewEncapsulation } from '@angular/core'
import { FileManagerAllModule, NavigationPaneService, ToolbarService, DetailsViewService  } from '@syncfusion/ej2-angular-filemanager'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'




import { Component, ViewChild } from '@angular/core';
import {FileManagerComponent} from '@syncfusion/ej2-angular-filemanager';
import { CheckBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [FileManagerAllModule,  CheckBoxModule],

providers:[ NavigationPaneService, ToolbarService, DetailsViewService],
encapsulation: ViewEncapsulation.None,
standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='files' #fileManager [ajaxSettings]='ajaxSettings' >
            <e-toolbaritems>
                <e-toolbaritem name= "NewFolder" text= "Create folder" prefixIcon= "e-plus" tooltipText= "Create folder" ></e-toolbaritem>
                <e-toolbaritem name= "Upload"></e-toolbaritem>
                <e-toolbaritem name= "SortBy"></e-toolbaritem>
                <e-toolbaritem name= "Refresh"></e-toolbaritem>
                <e-toolbaritem name= "Cut"></e-toolbaritem>
                <e-toolbaritem name= "Copy"></e-toolbaritem>
                <e-toolbaritem name= "Paste"></e-toolbaritem>
                <e-toolbaritem name= "Delete"></e-toolbaritem>
                <e-toolbaritem name= "Download"></e-toolbaritem>
                <e-toolbaritem name= "Rename"></e-toolbaritem>
                <e-toolbaritem name= "Select">
                    <ng-template #template>
                        <ejs-checkbox #checkbox label="Select All" [checked]="false" (change)="onChange($event)"></ejs-checkbox>
                    </ng-template>
                </e-toolbaritem>
                <e-toolbaritem name= "Selection"></e-toolbaritem>
                <e-toolbaritem name= "View"></e-toolbaritem>
                <e-toolbaritem name= "Details"></e-toolbaritem>
            </e-toolbaritems>
      </ejs-filemanager>`
})
export class AppComponent {
    @ViewChild('fileManager')
    public fileManagerInstance?: FileManagerComponent;
    @ViewChild('checkbox')
    public checkbox?: CheckBoxComponent;
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
    public onChange(args: ChangeEventArgs): void {
        if (args.checked) {
            (this.fileManagerInstance as FileManagerComponent).selectAll(); 
            (this.checkbox as CheckBoxComponent).label = 'Unselect All';
        }
        else {
          (this.fileManagerInstance as FileManagerComponent).clearSelection();
          (this.checkbox as CheckBoxComponent).label = 'Select All';
        }
    };
}
