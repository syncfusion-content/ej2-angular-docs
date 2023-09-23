

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template:
    `<button ej-button class='e-flat' (click)='click()'>Selected Records</button>
    <ejs-grid #grid [dataSource]='data' allowPaging=true [selectionSettings]='selectionOptions' [pageSettings]='pageOptions'>
        <e-columns>
            <e-column type='checkbox' width=50></e-column>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true'  textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=130></e-column>
            <e-column field='Freight' headerText='Freight' format= 'C2' width=100></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;
    public pageOptions?: PageSettingsModel;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple', persistSelection: true };
        this.pageOptions = { pageSize: 5 };
    }

    click(): void{
        let selectedrecords: Object[] = (this.grid as any).getSelectedRecords(); // get the selected records.
        let selectedRecordsCount: number = selectedrecords.length
        alert(selectedRecordsCount); // to alert the selected records count.
    }
}



