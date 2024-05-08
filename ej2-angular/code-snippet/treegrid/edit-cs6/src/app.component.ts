import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, EditSettingsModel,ToolbarItems, TreeGridComponent,EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';
import { ClickEventArgs, Item } from '@syncfusion/ej2-angular-navigations';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'en-US': {
        treegrid: {
            'OKButton':'YES',
            'CancelButton':'Discard' ,
            'ConfirmDelete': 'Are you sure you want to delete the selected Record?' 
        }
    }
  });

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `     <ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' [toolbar]='toolbar' (toolbarClick)="toolbarClick($event)" [editSettings]='editSettings' childMapping='subtasks' >
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
    public toolbar?: ToolbarItems[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
   
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row',showDeleteConfirmDialog: true, };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    toolbarClick(args: ClickEventArgs): void {
       
        if ((args.item as Item).text === 'Delete') {
            const dialogObj= ((this.treegrid as TreeGridComponent).editModule as any).dialogObj   ;
            dialogObj.header = 'Delete Confirmation Dialog';
            dialogObj.showCloseIcon = true;    
        }
      }
}



