
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, EditSettingsModel,ToolbarItems, TreeGridComponent ,EditService, ToolbarService, PageService} from '@syncfusion/ej2-angular-treegrid';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [
    TreeGridAllModule,DropDownListAllModule 
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<div style="display: flex">
                    <label style="padding: 30px 17px 0 0;"> Select column to disable editing:</label>
                    <ejs-dropdownlist #dropdown style="padding: 26px 0 0 0" index="0" width="150" [dataSource]="dropdownData" [fields]="dropdownFields" (change)="selectColumn($event)"></ejs-dropdownlist>
                </div>
                    <ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' [toolbar]='toolbar' [editSettings]='editSettings' childMapping='subtasks' >
                        <e-columns>
                            <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                            <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        </e-columns>
                    </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    @ViewChild('dropdown') public dropdown?: DropDownListComponent;
    public dropdownData: Object[] = [
        { text: 'Task ID', value: 'taskID' },
        { text: 'Task Name', value: 'taskName' },
        { text: 'Priority', value: 'priority' },
        { text: 'Duration', value: 'duration' },
      ];
      public dropdownFields: Object = { text: 'text', value: 'value' }; // Define fields for the dropdown
      public currentColumn?: any;
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    selectColumn(args:any){
        
        if (this.currentColumn) {
            ((this.treegrid as TreeGridComponent).columns[this.currentColumn.index] as any).allowEditing = true;
          }
          // Update the 'allowEditing' property for the selected column
          this.currentColumn = this.treegrid?.getColumnByField((args.value as string)) as Column;
          this.currentColumn.allowEditing = false;
          this.treegrid?.refreshColumns();
    }
}



