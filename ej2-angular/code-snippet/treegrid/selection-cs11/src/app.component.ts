import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { EditSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid'

@Component({
    selector: 'app-container',
    template: `<button ej-button id='selectCell' (click)='selectCell()'>Select Cell</button>
<button ej-button id='clear' (click)='clear()'>Clear selection</button>
<ejs-treegrid #treegrid [dataSource]='data'  height=250 [treeColumnIndex]='1' [editSettings]='editSettings' [allowPaging]='true' childMapping='subtasks' [selectionSettings]='selectionOptions'>
    <e-columns>
            <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
            <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
    </e-columns>
            </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public editSettings?: EditSettingsModel;
    public data: Object[] = [];
    public selectionOptions?: SelectionSettingsModel;
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Cell" };
        this.selectionOptions = { cellSelectionMode: 'Flow', type: 'Multiple', mode: 'Cell' };
    }
    selectCell() {
        this.treegrid?.selectCell({ rowIndex: 3, cellIndex: 1 });
    }
    clear() {
        this.treegrid?.clearSelection();
    }
}
