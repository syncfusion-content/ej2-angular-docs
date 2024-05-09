
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, EditSettingsModel,ToolbarItems, TreeGridComponent,EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

@Component({
    imports: [
    TreeGridAllModule,ToolbarModule 
    ],
    standalone: true,
    providers: [EditService, PageService],
    selector: 'app-container',
    template: ` <div style="display: flex">
                    <ejs-toolbar (clicked)="onToolbarClick($event)">
                        <e-items>
                            <e-item text="Add" id="add"></e-item>
                            <e-item text="Edit" id="edit"></e-item>
                            <e-item text="Delete" id="delete"></e-item>
                            <e-item text="Update" id="update"></e-item>
                            <e-item text="Cancel" id="cancel"></e-item>
                        </e-items>
                    </ejs-toolbar>
                </div>
                <ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority'  editType= 'dropdownedit'  width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
   
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row',showDeleteConfirmDialog: true, };
    }
    public onToolbarClick(args: ClickEventArgs): void {
        switch ((args as any).item.id) {
          case 'add':
            (this.treegrid as TreeGridComponent).addRecord();
            break;
          case 'edit':
            (this.treegrid as TreeGridComponent).startEdit();
            break;
          case 'delete':
            (this.treegrid as TreeGridComponent).deleteRecord();
            break;
          case 'update':
            (this.treegrid as TreeGridComponent).endEdit();
            break;
          case 'cancel':
            (this.treegrid as TreeGridComponent).closeEdit();
            break;
        }
      }
}



