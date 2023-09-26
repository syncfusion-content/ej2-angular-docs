

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, SelectionSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template:
    `<button ej-button class='e-flat' (click)='click()'>Selected Records</button>
    <ejs-treegrid #treegrid [dataSource]='data' allowPaging=true [treeColumnIndex]='2' [selectionSettings]='selectionOptions' childMapping='subtasks' [pageSettings]='pageOptions'>
                    <e-columns>
                        <e-column type='checkbox' width=50></e-column>
                        <e-column field='taskID' headerText='Task ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;
    public pageOptions?: PageSettingsModel;

    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.selectionOptions = { type: 'Multiple', persistSelection: true };
        this.pageOptions = { pageSize: 5 };
    }

    click(): void{
        let selectedrecords: Object[] = (this.treegrid as TreeGridComponent).getSelectedRecords(); // get the selected records.
        let selectedRecordsCount: number = selectedrecords.length
        alert(selectedRecordsCount); // to alert the selected records count.
    }
}



