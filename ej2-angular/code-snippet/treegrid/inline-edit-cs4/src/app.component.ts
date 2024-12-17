

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule, ButtonModule
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionBegin)="actionBegin($event)" childMapping='subtasks' >
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
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true,mode:"Row" };
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
                args.cancel = true;
        }
    }
    
}



