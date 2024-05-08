
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit} from '@angular/core';
import { textdata  } from './datasource';
import { EditSettingsModel, ToolbarItems ,EditService, ToolbarService, PageService} from '@syncfusion/ej2-angular-treegrid';
import { Query } from '@syncfusion/ej2-data';
import { FileInfo, FocusInEventArgs, SuccessEventArgs } from '@syncfusion/ej2-angular-inputs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
    TreeGridAllModule,UploaderModule 
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionBegin)='actionBegin($event)' childMapping='Children' >
                    <e-columns>
                        <e-column field='EmpID' headerText='Employee ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='Name' headerText='Name' textAlign='Left' width=250></e-column>
                        <e-column field='Contact' headerText='Contact' width=140></e-column>
                        <e-column headerText='Image' width='150' textAlign='Center'>
                            <ng-template #template let-data>
                                <div class="image">
                                    <img [src]="!data.Image ? 'https://ej2.syncfusion.com/angular/demos/assets/grid/images/' + data.EmployeeID + '.png' : getImageUrl(data.Image)"  alt="{{data.Name}}" />
                                </div>
                            </ng-template>
                            <ng-template #editTemplate let-data>
                                <ejs-uploader #defaultupload (success)="onUploadSuccess($event)" [asyncSettings]='path' multiple='false'></ejs-uploader>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-treegrid>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public taskData: object | any;
    public strm?:any;
    public path: object = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    constructor(private sanitizer: DomSanitizer) {
      
     }
     getImageUrl(image: string): SafeResourceUrl {
       
        return this.sanitizer.bypassSecurityTrustResourceUrl(image);
      }
    
    ngOnInit(): void {
        this.data = textdata;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        
    }
    actionBegin(args: any) {
        if (args.requestType === 'beginEdit' || args.type === 'edit' || args.requestType === 'add') {
            (this.taskData as object) = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as columnDataType)['Image'] = this.strm;
        }
    }
    
    onUploadSuccess(args: SuccessEventArgs) {
        if (args.operation === 'upload') {
            const fileBlob = (args.file as FileInfo).rawFile as Blob;
            const file = new File([fileBlob], (args.file as FileInfo).name);
            this.strm = this.getBase64(file);
        }
    }

    getBase64(file:File): string {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e:any) => {
            this.strm = reader.result as string;
            
        };
        
        this.strm=this.sanitizer.bypassSecurityTrustResourceUrl(this.strm);
        return (this.strm as string); 
    }

}
export interface columnDataType{
    Image?: string;
 }
 
