import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120 [allowFiltering]='false'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100 ></e-column>
                </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {
  public data?: object[];

  ngOnInit(): void {
    this.data = data;
  }
}