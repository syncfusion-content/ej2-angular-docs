

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
selector: 'app-root',
template: `<ejs-grid #grid [dataSource]='data' height='315px' gridLines='Both' (dataBound)='dataBound()' >
<e-columns>
<e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
<e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
<e-column field='ShipName' headerText='Ship Name' width=80></e-column>
<e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
<e-column field='ShipCity' headerText='Ship City' width=100></e-column>
</e-columns>
</ejs-grid>`
})
export class AppComponent implements OnInit {

public data?: object[];
@ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    dataBound() {
        (this.grid as any).autoFitColumns(['ShipAddress', 'ShipName']);
    }
}



