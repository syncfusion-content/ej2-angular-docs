

import { Component, OnInit } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';

const SERVICE_URI = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/?$top=20';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height="315px">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='EmployeeID' headerText='EmployeeID' textAlign='Right' width=90></e-column>
                    <e-column field='ShipName' headerText='Ship Name' textAlign='Left' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: DataManager;

    public ngOnInit(): void {
        this.data = new DataManager({ url: SERVICE_URI });
    }
}



