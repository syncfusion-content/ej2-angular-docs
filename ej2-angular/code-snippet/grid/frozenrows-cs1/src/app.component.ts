import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FreezeService, SelectionService, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids'
import { NumericTextBoxAllModule, RatingAllModule } from '@syncfusion/ej2-angular-inputs'
import {  ButtonModule } from '@syncfusion/ej2-angular-buttons'


import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
        NumericTextBoxAllModule,
        RatingAllModule,
        ButtonModule
    ],

providers: [FreezeService, SelectionService, EditService, ToolbarService],
standalone: true,
  selector: 'app-root',
  template: `<div style="display: flex">
    <label style="padding: 10px 10px 26px 0"> Change the frozen rows: </label>
    <ejs-numerictextbox
      #frozenRows
      min="0"
      max="5"
      [validateDecimalOnType]="true"
      decimals="0"
      format="n"
      value="2"
      width="100px"
    ></ejs-numerictextbox>
    <div>
      <button style="margin-left:5px" ejs-button (click)="frozenRowsFn()">
        Update
      </button>
    </div>
  </div>
  <ejs-grid #grid style="padding: 5px 5px" [dataSource]='data' height=315 [frozenRows]='2' [allowSelection]='false'  [enableHover]='false'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
      <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right'></e-column>
      <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
      <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
      <e-column field='ShipAddress' headerText='Ship Address' width=140></e-column>
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
  @ViewChild('grid')
  public grid?: GridComponent;
  @ViewChild('frozenRows')
  public frozenRows?: NumericTextBoxComponent;

  ngOnInit(): void {
    this.data = data
  }

  frozenRowsFn() {
    (this.grid as GridComponent).frozenRows = (this.frozenRows as NumericTextBoxComponent).value;
  }
}



