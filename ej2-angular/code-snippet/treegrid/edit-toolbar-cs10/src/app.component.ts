

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent, Column } from '@syncfusion/ej2-angular-treegrid';
import { SaveEventArgs, EditEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionComplete)="actionComplete($event)" (actionBegin)="actionBegin($event)" childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' [visible]='false' textAlign='Right' width=90></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' editType='datepickeredit' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid') treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionBegin(args: EditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            for (const cols of (this.treegrid as TreeGridComponent).grid.columns) {
                if ((cols as Column).field === 'priority') {
                    (cols as Column).visible = true;
                } else if ((cols as Column).field === 'duration') {
                    (cols as Column).visible = false;
                }
            }
        }
    }

    actionComplete(args: SaveEventArgs) {
        if (args.requestType === 'save') {
            for (const cols of (this.treegrid as TreeGridComponent).grid.columns) {
                if ((cols as Column).field === 'priority') {
                    (cols as Column).visible = false;
                } else if ((cols as Column).field === 'duration') {
                    (cols as Column).visible = true;
                }
            }
        }
    }
}



