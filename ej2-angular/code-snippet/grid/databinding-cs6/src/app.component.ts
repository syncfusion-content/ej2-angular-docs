

import { Component, OnInit } from '@angular/core';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' allowPaging='true'  allowSorting='true' allowFiltering='true' [pageSettings]='pageSettings' [loadingIndicator]='loadingIndicator'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: DataManager;
    public loadingIndicator?: any;
    public pageSettings?: Object;
    ngOnInit(): void {
        this.data = new DataManager({
            url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/',
            adaptor: new ODataAdaptor()
        });
        this.loadingIndicator = {indicatorType: 'Shimmer'};
        this.pageSettings = { pageCount: 3 };
    }
}


