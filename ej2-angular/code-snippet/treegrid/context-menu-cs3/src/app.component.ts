

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' #treegrid height='220' [allowPaging]='true' pageSettings='pager' [editSettings]='editSettings'
    [contextMenuItems]='contextMenuItems' [treeColumnIndex]='1' (contextMenuOpen)='contextMenuOpen($event)' (contextMenuClick)='contextMenuClick($event)' childMapping='subtasks'>
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>`
})

export class AppComponent implements OnInit {
    public data?: Object[];
    public pager?: Object;
    public editSettings?: Object;
    public contextMenuItems?: Object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
        this.contextMenuItems=[
          { text: 'Edit Record', target: '.e-content', id: 'Edit_record' },
          { text: 'Delete Record', target: '.e-content', id: 'Delete_record' },
        ];
        this.pager = { pageSize: 8 }
    }
    contextMenuClick(args?: MenuEventArgs): void {
        if((args as MenuEventArgs).element.innerHTML == "Edit Record"){
            (this.treegrid as TreeGridComponent).startEdit((args as MenuEventArgs | any).rowInfo.row);
        }
        else if((args as MenuEventArgs).element.innerHTML == "Delete Record"){
            (this.treegrid as TreeGridComponent).deleteRecord((args as MenuEventArgs | any).rowInfo.row);
        }
    }
    contextMenuOpen(args?: BeforeOpenCloseEventArgs): void {
        if ((args as BeforeOpenCloseEventArgs | any).rowInfo.rowData.hasChildRecords == true){
            (this.treegrid as TreeGridComponent).grid.contextMenuModule.contextMenu.enableItems(['Edit Record'],true);//Enable edit
            (this.treegrid as TreeGridComponent).grid.contextMenuModule.contextMenu.enableItems(['Delete Record'],false);//Disable delete
        } else {
            (this.treegrid as TreeGridComponent).grid.contextMenuModule.contextMenu.enableItems(['Edit Record'],false);//Disable edit
            (this.treegrid as TreeGridComponent).grid.contextMenuModule.contextMenu.enableItems(['Delete Record'],true);//Enable edit
        }
    }
}



