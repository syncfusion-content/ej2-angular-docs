import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, EditSettingsModel,ToolbarItems, TreeGridComponent ,EditService, ToolbarService, PageService} from '@syncfusion/ej2-angular-treegrid';
import { RowSelectEventArgs, parentsUntil } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [EditService, ToolbarService,PageService],
    standalone: true,
    selector: 'app-container',
    template: ` <ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' (created)="created()" [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80>
                            <ng-template #template let-data>
                                <input id='{{data.taskID}}' value='{{data.duration}}' class='custemp' type='text' style='width: 100%'>
                            </ng-template>
                        </e-column>
                        <e-column field='priority' headerText='Priority'  editType= 'dropdownedit'  width=90></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    
    public data?: Object[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    public editSettings: Object = { allowEditing: true,mode:"Row"};
    ngOnInit(): void {
        this.data = sampleData;
    }
    created() {
        (this.treegrid as TreeGridComponent).element.addEventListener('keyup', function (e) { // Bind the keyup event for the grid.
            if ((e.target as HTMLElement).classList.contains('custemp')) { // Based on this condition, you can find whether the target is an input element or not.
                var row = parentsUntil(e.target as HTMLElement, 'e-row');
                var rowIndex = (row as HTMLFormElement)['rowIndex']; // Get the row index.
                var uid = row.getAttribute('data-uid');
                var treegrid = (document.getElementsByClassName('e-treegrid')[0] as HTMLFormElement)['ej2_instances'][0];
                var rowData = treegrid.getRowObjectFromUID(uid).data; // Get the row data.
                rowData.Freight = ((e.target as HTMLFormElement)['value']); // Update the new value for the corresponding column.
                treegrid.updateRow(rowIndex, rowData); // Update the modified value in the row data.
            }
        });
    }
     
}



