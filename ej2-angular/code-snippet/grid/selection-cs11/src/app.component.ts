

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template:
    `<button ej-button class='e-flat' (click)='click()'>Clear Selection</button>
    <ejs-grid #grid [dataSource]='data' [selectedRowIndex]=2 allowPaging=true [selectionSettings]='selectionOptions' [pageSettings]='pageOptions'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=130></e-column>
            <e-column field='Freight' headerText='Freight' format= 'C2' width=100></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public selectionOptions?: SelectionSettingsModel;
    public pageOptions?: PageSettingsModel;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple' };
        this.pageOptions = { pageSize: 5 };
    }

    click(): void{
        (this.grid as any).clearSelection();
    }
}



