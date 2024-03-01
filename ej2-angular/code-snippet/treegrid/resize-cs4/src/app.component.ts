

import { Component, OnInit,ViewChild } from '@angular/core';
import { stackedData } from './datasource';
import { ResizeService  } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' childMapping='subtasks' height='260' [allowResizing]='true' [treeColumnIndex]='1' >
                    <e-columns>
                        <e-column headerText='Order Details' [columns]='orderColumns'></e-column>
                        <e-column headerText='Shipment Details' [columns]='shipColumns'></e-column>
                        <e-column headerText='Price Details' [columns]='priceColumns'></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    providers: [ResizeService ]
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public orderColumns?: Object[];
    public shipColumns?: Object[];
    public priceColumns?: Object[];

    ngOnInit(): void {
        this.data = stackedData;
        this.orderColumns = [
            { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 180 },
            { field: 'orderDate', headerText: 'Order Date', textAlign: 'Right', width: 120, format: 'yMd'}
        ];
        this.shipColumns = [
            { field: 'shipMentCategory', headerText: 'Shipment Category', textAlign: 'Left', width: 150 },
            { field: 'shippedDate', headerText: 'Shipped Date', textAlign: 'Right', width: 120, format: 'yMd' , allowResizing: false},
            { field: 'units', headerText: 'Units', textAlign: 'Right', width: 90 }
        ];
        this.priceColumns = [
            { field: 'unitPrice', headerText: 'Price per unit', format: 'c2', type: 'number', width: 120, textAlign: 'Right' },
            { field: 'price', headerText: 'Total Price', width: 110, format: 'c2', type: 'number', textAlign: 'Right' }
        ];
    }
}



