import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
  GridComponent,
  SelectionSettingsModel,
  PageSettingsModel,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `
        <div>
          <label style="padding: 30px 17px 0 0">Enter the row index: </label>
          <ejs-textbox #textbox required placeholder="Enter new header text" width="220">
          </ejs-textbox>
        </div>
        <div style="padding: 10px 0 0px 150px">
        <button ejs-button id="button" (click)="click()">Select Cell</button>
        </div>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid #grid [dataSource]="data"  [selectionSettings]="selectionOptions" >
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
              width="120"></e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
              <e-column field="ShipCountry" headerText="Ship Country" width="130">
              </e-column>
              <e-column field="Freight" headerText="Freight" format="C2" width="100">
              </e-column>
            </e-columns>
          </ejs-grid>
        </div>`
})
export class AppComponent implements OnInit {

  public data?: Object[];
  public selectionOptions?: SelectionSettingsModel;
  public pageOptions?: PageSettingsModel;
  public rowIndex?: number;

  @ViewChild('textbox') public textbox?: any;
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { mode: 'Row', type: 'Single' };
    this.pageOptions = { pageSize: 5 };
  }
  click(): void {
    this.rowIndex = parseInt(this.textbox.element.value, 10);
    if (!isNaN(this.rowIndex)) {
      (this as any).grid.selectRow(this.rowIndex);
    }
  }
}
