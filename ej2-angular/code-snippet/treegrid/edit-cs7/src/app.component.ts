

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, EditSettingsModel,ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `     <ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' [toolbar]='toolbar' [editSettings]='editSettings' childMapping='subtasks' >
                        <e-columns>
                            <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                            <e-column field='priority' headerText='Priority'  editType= 'dropdownedit'  width=90></e-column>
                            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                            <e-column field="approved" headerText="Approved" textAlign="Right" width="90">
                                <ng-template #template let-data>
                                    <ejs-checkbox [(checked)]="data.approved"></ejs-checkbox>
                                </ng-template>
                          </e-column>
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
    
}



