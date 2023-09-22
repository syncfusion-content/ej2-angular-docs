

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [height]='315'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' width=100 format= 'C2'></e-column>
                    <e-column field='Verified' headerText='Verified' [displayAsCheckBox]="true" width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}



