import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' allowPaging='true' [query]='query' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                        <e-column field='Employee.City' headerText='City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {
    public data: DataManager = new DataManager({
        adaptor: new ODataV4Adaptor(),
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    });
    public query = new Query().expand('Employee');
    ngOnInit(): void { }
}
