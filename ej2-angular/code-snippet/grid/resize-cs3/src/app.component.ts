

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowResizing]='true' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' minWidth= 100 width=150 maxWidth=250 ></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name'  minWidth= 150 width=200 maxWidth=300></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right'  minWidth= 120 width=150 maxWidth=280></e-column>
                    <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' width=80></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = data;
    }
}



