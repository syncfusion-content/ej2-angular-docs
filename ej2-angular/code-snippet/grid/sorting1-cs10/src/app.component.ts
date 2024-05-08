import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SortService, ForeignKeyService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { data, customerData } from './datasource';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [SortService,ForeignKeyService],
standalone: true,
    selector: 'app-root',
    template: `
    <ejs-grid [dataSource]='data' [allowSorting]='true' height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' foreignKeyValue='ContactName' foreignKeyField='CustomerID' [dataSource]='customerData' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid> `
})
export class AppComponent implements OnInit {

    public data?: object[];
    public customerData: object[] = customerData;

    ngOnInit(): void {
        this.data = data;
    }
}



