

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height=315 width=400>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}



