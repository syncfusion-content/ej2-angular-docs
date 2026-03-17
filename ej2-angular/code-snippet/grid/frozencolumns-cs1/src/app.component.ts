import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { EditService, FreezeService, GridComponent, GridModule, SelectionService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxAllModule, NumericTextBoxComponent, RatingAllModule } from '@syncfusion/ej2-angular-inputs';

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
    <label style="padding: 5px 5px 5px 0">
      Change the frozen columns:
    </label>
    <ejs-numerictextbox
      id="frozenColumns"
      #frozenColumns
      min="0"
      max="3"
      [validateDecimalOnType]="true"
      decimals="0"
      format="n"
      value="2"
      width="100px"
    ></ejs-numerictextbox>
    <div> 
      <button style="margin-left:5px" ejs-button (click)="frozenColumnFn()">
        Update
      </button>
    </div>
  </div>
  <ejs-grid #grid style="padding: 5px 5px" [dataSource]='data' height=290 [frozenColumns]='2' [allowSelection]='false'  [enableHover]='false'>
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
    @ViewChild('frozenColumns')
    public frozenColumns?: NumericTextBoxComponent;
  
    ngOnInit(): void {
      this.data = data;
    }
  
    frozenColumnFn() {
      (this.grid as GridComponent).frozenColumns = (this.frozenColumns as NumericTextBoxComponent).value;
    }
}
