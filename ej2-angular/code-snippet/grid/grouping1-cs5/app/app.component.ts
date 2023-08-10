

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='OrderDate' headerText='Order Date' format='yMMM' [enableGroupByFormat]='true' width=150></e-column>
                    <e-column field='Freight' headerText='Freight' format='C2' [enableGroupByFormat]='true' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public groupOptions?: GroupSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showDropArea: false, columns: ['OrderDate', 'Freight'] };
    }
}