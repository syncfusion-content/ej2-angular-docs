
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height=315 [frozenColumns]='2' [frozenRows]='3' [allowSelection]='false' [enableHover]='false'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width=130 format='yMd' textAlign='Right'></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                    <e-column field='ShipAddress' headerText='Ship Address' width=170></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                    <e-column field='ShipRegion' headerText='Ship Region' width=150></e-column>
                    <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=150></e-column>
                    <e-column field='Freight' headerText='Freight' width=120></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}



