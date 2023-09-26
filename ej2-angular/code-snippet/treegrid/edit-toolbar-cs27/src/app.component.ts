

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<button (click)="btnClick($event)">TreeGrid is Addable</button>
                <ejs-treegrid [dataSource]='data' [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionBegin)="actionBegin($event)" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' editType='datepickeredit' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public isAddable: boolean = true;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionBegin(args: any) {
        if (args.requestType == 'beginEdit') {
            if (args.rowData['priority'] == 'Low') {
                args.cancel = true;
            }
        }
        if (args.requestType == 'delete') {
            if (args.data[0]['priority'] == 'Low') {
                args.cancel = true;
            }
        }
        if (args.requestType == 'add') {
            if (!this.isAddable) {
                args.cancel = true;
            }
        }
    }
    btnClick(args: any) {
        args.target.innerText == 'TreeGrid is Addable' ? (args.target.innerText = 'TreeGrid is Not Addable') : (args.target.innerText = 'TreeGrid is Addable');
        this.isAddable = !this.isAddable;
    }
}



