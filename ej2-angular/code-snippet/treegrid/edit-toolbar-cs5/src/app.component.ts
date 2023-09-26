

import { Component, OnInit } from '@angular/core';
import { projectData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<button (click)="btnClick($event)">TreeGrid is Addable</button>
                <ejs-treegrid [dataSource]='data' parentIdMapping='parentID' idMapping='TaskID' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (cellEdit)="cellEdit($event)" (beforeBatchAdd)="beforeBatchAdd($event)" (beforeBatchDelete)="beforeBatchDelete($event)" >
                    <e-columns>
                        <e-column field='TaskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='Priority' headerText='Priority' textAlign='Right' width=120></e-column>
                        <e-column field='Duration' headerText='Duration' textAlign='Right' width=110></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public isAddable: boolean = true;

    ngOnInit(): void {
        this.data = projectData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    cellEdit(args: any) {
        if (args.rowData['Priority'] == 'Normal') {
            args.cancel = true;
        }
    }
    beforeBatchAdd(args: any) {
        if (!this.isAddable) {
            args.cancel = true;
        }
    }
    beforeBatchDelete(args: any) {
        if (args.rowData['Priority'] == 'Normal') {
            args.cancel = true;
        }
    }
    btnClick(args: any) {
        args.target.innerText == 'TreeGrid is Addable' ? (args.target.innerText = 'TreeGrid is Not Addable') : (args.target.innerText = 'TreeGrid is Addable');
        this.isAddable = !this.isAddable;
    }
}



