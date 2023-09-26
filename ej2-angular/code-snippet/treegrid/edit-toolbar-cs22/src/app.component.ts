

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' [toolbar]='toolbarOptions' (actionBegin)="actionBegin($event)" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
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
        this.editSettings = { allowEditing: true, mode: 'Row' };
        this.toolbarOptions = ['Edit', 'Update', 'Cancel'];
    }

    actionBegin(args: any) {
        if (args.requestType === 'beginEdit') {
            if (args.rowData.priority === 'Normal') {
                args.cancel = true;
            }
        }
    }
}



