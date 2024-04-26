import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'


import { Component, NgIterable, OnInit } from '@angular/core';
import { data } from './datasource';
import { ColumnModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
        SortService,
        FilterService,
        GroupService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data'>
    <e-columns>
    <e-column *ngFor="let column of columns" [field]="column.field" [headerText]="column.headerText"></e-column> 
    </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public columns?: NgIterable<ColumnModel> | null | undefined;

  ngOnInit(): void {
    this.data = data;
    this.columns = [
      { field: 'OrderID', headerText: 'Order ID' },
      { field: 'CustomerID', headerText: 'Customer ID' },
      { field: 'Freight', headerText: 'Freight' },
      { field: 'ShipCountry', headerText: 'ShipCountry' }
    ];
  }
}