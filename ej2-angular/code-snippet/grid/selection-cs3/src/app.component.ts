

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                <e-columns>
                    <e-column type='checkbox' width='50'></e-column>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;

    ngOnInit(): void {
        this.data = data;
    }
}



