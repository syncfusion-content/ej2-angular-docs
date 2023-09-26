import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-treegrid'
import { CellSelectEventArgs } from '@syncfusion/ej2-angular-grids';
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' (cellSelected)='cellSelected($event)' height=250 [treeColumnIndex]='1' [allowPaging]='true' childMapping='subtasks' [selectionSettings]='selectionOptions'>
    <e-columns>
            <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
            <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
    </e-columns>
            </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data: Object[] = [];
    public selectionOptions?: SelectionSettingsModel;
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
        this.selectionOptions = { cellSelectionMode: 'Flow', type: 'Multiple', mode:'Cell' };
    }
    cellSelected(args: CellSelectEventArgs) {
        var cellSelected: object[] = this.treegrid?.getSelectedRowCellIndexes() as object[];
        var cellSelectedCount: number = cellSelected.length;
        alert('Selected row cell count : ' + cellSelectedCount)
    }
}