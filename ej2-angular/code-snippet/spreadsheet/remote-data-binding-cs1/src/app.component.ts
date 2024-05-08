import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'




import { Component, OnInit, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet><e-sheets><e-sheet name='Shipment Details'> <e-ranges> <e-range [showFieldAsHeader]='false' startCell='A2' [dataSource]='data' [query]='query'>  </e-range> </e-ranges><e-rows><e-row><e-cells><e-cell value='Order ID'></e-cell> <e-cell value='Customer Name'></e-cell> <e-cell value='Freight'></e-cell>  <e-cell value='Ship Name'></e-cell><e-cell value='Ship City'></e-cell> <e-cell value='Ship Country'></e-cell></e-cells> </e-row></e-rows><e-columns><e-column [width]=100></e-column>  <e-column [width]=130></e-column> <e-column [width]=100></e-column>  <e-column [width]=220></e-column>  <e-column [width]=150></e-column> <e-column [width]=180></e-column>  </e-columns> </e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {

    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    public query: Query = new Query().select(['OrderID', 'CustomerID', 'ShipName', 'ShipCity', 'ShipCountry', 'Freight']).take(200);
    public data: DataManager = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/Orders',
        crossDomain: true
    });
    ngOnInit(): void {
        this.data = this.data;
    }
}



