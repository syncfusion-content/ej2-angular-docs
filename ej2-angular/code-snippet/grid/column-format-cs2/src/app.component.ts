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
    template: `<ejs-grid [dataSource]='data' height="315px">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' [format]='numberFormatOptions' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' [format]='dateFormatOptions' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public numberFormatOptions?: object;
    public dateFormatOptions?: object;

    ngOnInit(): void {
        this.data = data;
        this.numberFormatOptions = {
            // Custom format for numeric columns
            format: '##.0000',
        };
        this.dateFormatOptions = {
            // Custom format for date columns
            type: 'Date',
            format: "EEE, MMM d, ''yy",
        };
    }
}


