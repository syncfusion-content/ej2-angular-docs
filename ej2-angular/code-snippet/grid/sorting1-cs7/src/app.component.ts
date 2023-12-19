

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `
    <ejs-grid [dataSource]='data' [allowSorting]='true' [sortSettings]="initialSort" height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid> `,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public initialSort?: Object;

    ngOnInit(): void {
        this.data = data;
        this.initialSort = {
            columns: [
                { field: 'ShipCity', direction: 'Ascending' },
                { field: 'CustomerID', direction: 'Descending' },
            ],
        };
    }

}



