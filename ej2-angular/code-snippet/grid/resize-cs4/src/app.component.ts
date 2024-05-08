import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ResizeService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ColumnModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ResizeService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowResizing]='true' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='100' textAlign="Center" minWidth=10></e-column>
                    <e-column headerText='Order Details' [columns]='orderColumns'></e-column>
                    <e-column headerText='Ship Details' [columns]='shipColumns' ></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public orderColumns?: ColumnModel[];
    public shipColumns?: ColumnModel[];


    ngOnInit(): void {
        this.data = data;
        this.orderColumns = [
            {
                field: 'OrderDate',
                headerText: 'Order Date',
                format: 'yMd',
                width: 120,
                textAlign: 'Right',
                minWidth: 10,
            },
            {
                field: 'Freight',
                headerText: 'Freight ($)',
                width: 100,
                format: 'C1',
                textAlign: 'Right',
                minWidth: 10
            }
        ];

        this.shipColumns = [
            {
                field: 'ShipCity',
                headerText: 'Ship City',
                width: 100,
                minWidth: 10,
                allowResizing: false
            },
            {
                field: 'ShipCountry',
                headerText: 'Ship Country',
                width: 120,
                minWidth: 10
            }
        ];
    }
}



