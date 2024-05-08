import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent,Column } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';


@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
    selector: 'app-root',
    template: `<button ejs-button id='add' cssClass="e-info" (click)='addColumns()'> Add Column</button>
               <button ejs-button id='delete' cssClass="e-info" (click)='deleteColumns()'> Delete Column</button>
                <ejs-grid #grid [dataSource]='data' [height]='280' >
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=120 ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    addColumns(): void {
        var newColumns = [
            { field: 'EmployeeID', headerText: 'EmployeeID', width: 120 },
            { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
          ];
          newColumns.forEach((col) => {
            (this.grid as GridComponent).columns.push(col as Column);
          });
          (this.grid as GridComponent).refreshColumns();
    }
    deleteColumns(): void {
        (this.grid as GridComponent).columns.pop();
        (this.grid as GridComponent).refreshColumns();
    }
}



