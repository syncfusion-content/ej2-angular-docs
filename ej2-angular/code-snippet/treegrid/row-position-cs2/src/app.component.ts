
import { NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent,EditService,ContextMenuService, TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers:[EditService,ContextMenuService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbar' [contextMenuItems]='contextMenuItems' [treeColumnIndex]='1' height='230' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' editType= 'dropdownedit' textAlign='Right' width=140></e-column>
                        <e-column field='progress' editType= 'numericedit' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public contextMenuItems?: Object[]
    
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowAdding: true, mode:"Row", newRowPosition:"Above"};
        this.toolbar = ['Add', 'Update', 'Cancel'];
        this.contextMenuItems = ['AddRow'];
        
    }
   

}