

import { L10n } from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

L10n.load({
    'en-US': {
        treegrid: {
            'SaveButton': 'Submit',
            'CancelButton': 'Discard'
        }
    }
});

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionComplete)="actionComplete($event)" childMapping='subtasks' >
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

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionComplete(args: any) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            const dialog = args.dialog;
            const taskName = 'taskName';
            dialog.showCloseIcon = false;
            dialog.height = 400;
            // change the header of the dialog
            dialog.header = args.requestType === 'beginEdit' ? 'Edit Record of ' + args.rowData['taskName'] : 'New Customer';
        }
    }
}




