

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { Data } from '@syncfusion/ej2-angular-grids';

const old = Data.prototype.generateQuery;
Data.prototype.generateQuery = function() {
    const query = old.call(this, true);
    (this as any).pageQuery(query);
    return query;
};

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]="true" [pageSettings]='initialPage'
     [allowGrouping]="true" [groupSettings]="groupOptions" [allowPaging]='true'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='ShipCountry' headerText='ShipCountry' width=140></e-column>
                    <e-column field='CustomerID' headerText='Name' width=140></e-column>
                    <e-column field='ShipName' headerText='ShipName' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: object;
    public initialPage?: object;

    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showGroupedColumn: false, columns: ['ShipCountry'] };
        this.initialPage = { pageSize: 5 };
    }
}



