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
    template: `
         <div style="height:500px;width:600px">
           <ejs-grid [dataSource]='data' height='100%' width='100%'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='Frieght' headerText='Frieght' textAlign='Right' width=120></e-column>
                    <e-column field='ShipAddress' headerText='ShipAddress' width=150></e-column>
                </e-columns>
            </ejs-grid>
            </div>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}



