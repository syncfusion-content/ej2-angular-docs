import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems, TreeGridComponent ,EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';
import { EditEventArgs} from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [EditService, ToolbarService,PageService],
    standalone: true,
    selector: 'app-container',
    template: ` <ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' [toolbar]='toolbar' (actionBegin)="actionBegin($event)" [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column field='priority' headerText='Priority'  editType= 'dropdownedit'  width=90></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    
    public data?: Object[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    public editSettings: Object = { allowEditing: true,mode:"Row"};
    public toolbar?: ToolbarItems[];
    ngOnInit(): void {
        this.data = sampleData;
        this.toolbar = ['Edit', 'Update', 'Cancel'];
    }
    
    actionBegin(args: EditEventArgs) {
        if (args.requestType === 'beginEdit' && ((args.rowData as any).taskName === 'Testing' || (args.rowData as any).taskName === 'Planning' )) {
            args.cancel = true;
        }
    }
}



