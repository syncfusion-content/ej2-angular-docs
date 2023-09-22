

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowReordering]='true' [allowSelection]='false' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' width=100 [lockColumn]='true' [customAttributes]='customAttributes'></e-column>
                    <e-column field='ShipName'width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public customAttributes?: object;

    ngOnInit(): void {
        this.data = data;
        this.customAttributes = {class: 'customcss'};
    }
}

