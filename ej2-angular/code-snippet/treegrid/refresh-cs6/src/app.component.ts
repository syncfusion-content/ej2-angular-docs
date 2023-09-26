

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent, EditSettingsModel, ToolbarItems , EditService, ToolbarService  } from '@syncfusion/ej2-angular-treegrid';
import { DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';
import { Dialog } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-container',
    providers: [EditService, ToolbarService],
    template: `<ejs-treegrid #treegrid [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [height]='265' [editSettings]='editSettings' [toolbar]='toolbar' (actionComplete)="actionComplete($event)" >
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' isPrimaryKey='true'  width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' editType='datepickeredit' [edit]='editOptions' width='90'></e-column>
            <e-column field='EndDate' headerText='End Date' width='90' [format]='formatOptions' editType='datepickeredit' [edit]='editOptions' textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public editOptions?: Object;
    public formatOptions?: Object;

    ngOnInit(): void {
        this.data = projectData;
        this.editOptions = { params: { format: 'y/M/d' } };
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            const dialog = args.dialog as Dialog;
            const TaskName = 'TaskName';
            dialog.height = 400;
            // change the header of the dialog
            dialog.header = args.requestType === 'beginEdit' ? 'Record of ' + (args as any).rowData[TaskName] : 'New Customer';
        }
    }



}