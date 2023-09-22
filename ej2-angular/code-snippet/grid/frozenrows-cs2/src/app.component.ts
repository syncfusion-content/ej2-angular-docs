
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315' [frozenRows]='2' [enableHover]='false'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width='150' freeze='Right'></e-column>
                        <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width='150'></e-column>
                        <e-column field='ShipAddress' headerText='Ship Address' width='170'></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width='150' freeze='Left'></e-column>
                    </e-columns>
            </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}



