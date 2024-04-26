import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right'
                         [valueAccessor]='currencyFormatter' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 [valueAccessor]='concatenateFields' ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public currencyFormatter = (field: string, valueAccessordata: object, column: object) => {
        return '€' + (valueAccessordata as any)["Freight"];
    }

    public concatenateFields = (field: string, valueAccessordata: object, column: object) => {
        return (valueAccessordata as any)[field] + ' - ' + (valueAccessordata as any)["ShipRegion"];
    }

    ngOnInit(): void {
        this.data = data;
    }
}



