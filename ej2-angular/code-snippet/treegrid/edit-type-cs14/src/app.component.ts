

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { textdata} from './datasource';
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { EditSettingsModel, ToolbarItems ,EditService, ToolbarService, PageService,} from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule,MaskedTextBoxModule
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionBegin)='actionBegin($event)' childMapping='Children' >
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='Name' headerText='Name' textAlign='Left' width=180></e-column>
                        <e-column field='Contact' headerText='Contact' width=180>
                            <ng-template #editTemplate let-data>
                                <ejs-maskedtextbox id="masktextbox" #mask name="Contact" mask='000-000-0000' [(value)]="employeeData.Contact"></ejs-maskedtextbox>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public employeeData?: object | any;
    
    ngOnInit(): void {
        this.data = textdata;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true,mode:"Row" };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        
    }
    actionBegin(args: any) {
        if (args.requestType === 'beginEdit' || args.type === 'edit' || args.requestType === 'add') {
            (this.employeeData as object) = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as any)['Contact'] = this.employeeData['Contact'];
        }
    }

}



