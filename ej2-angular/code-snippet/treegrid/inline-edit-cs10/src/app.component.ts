
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent, EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';
import { EditEventArgs, RecordDoubleClickEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule, 
    ],
    standalone: true,
    providers: [EditService, ToolbarService, PageService],
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='270' [toolbar]='toolbarOptions' [editSettings]='editSettings' (actionComplete)='actionComplete($event)' (recordDoubleClick)='recordDoubleClick($event)' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;
    public fieldName: string|any = ''; // Explicitly declare the type

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowAdding:true, allowEditing:true, allowDeleting: true,mode:'Row'  };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        
    }
    actionComplete(args:EditEventArgs) {
        if (args.requestType === "beginEdit") {
            // focus the column
            ((args.form as HTMLFormElement).elements[(this.treegrid as TreeGridComponent).grid.element.getAttribute("id") + this.fieldName] as HTMLInputElement).focus();
        }
    }
    recordDoubleClick(args:RecordDoubleClickEventArgs) {
        this.fieldName = (this.treegrid as TreeGridComponent).grid.getColumnByIndex((args.cellIndex as number)).field;   
    }
    
}