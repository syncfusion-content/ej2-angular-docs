import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterService, PageService, GridComponent, Column } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService],
standalone: true,
    selector: 'app-root',
    template: `<button ejs-button id='add' (click)='addColumn()'>Add Columns</button>
               <ejs-grid #grid id="Orders" [dataSource]='data' [enablePersistence]='true' [allowPaging]='true' height='210px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [FilterService, PageService]
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }
    addColumn() {
        let obj = { field: "Freight", headerText: 'Freight', width: 120 };
        ((this.grid as GridComponent).columns as Column[]).push(obj as Column); //you can add the columns by using the Grid columns method
        (this.grid as GridComponent).refreshColumns();
   }
}