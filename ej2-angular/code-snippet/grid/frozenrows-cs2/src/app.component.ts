import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FreezeService, SelectionService, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
    ],

providers: [FreezeService, SelectionService, EditService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height=315 [allowSelection]='false' [frozenRows]='3' [enableHover]='false'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=100 ></e-column>
      <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right'></e-column>
      <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
      <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
      <e-column field='ShipAddress' headerText='Ship Address' width=140 ></e-column>
      <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
      <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
      <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
      <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=110></e-column>
      <e-column field='Freight' headerText='Freight' width=80></e-column>
    </e-columns>
  </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
  
    ngOnInit(): void {
      this.data = data
    }
}



