

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowSorting]='true' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' [sortComparer]='sortComparer' headerText='Customer ID' width=100></e-column>
                    <e-column field='Freight' headerText='Freight' width=80 format='C2'></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    // The custom function
    public sortComparer = (reference: string, comparer: string) => {
        if (reference < comparer) {
            return -1;
        }
        if (reference > comparer) {
            return 1;
        }
        return 0;
    }

    ngOnInit(): void {
        this.data = data;
    }
}



