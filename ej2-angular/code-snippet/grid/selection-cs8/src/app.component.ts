import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: ` 
        <div style="padding: 10px 0px 20px 0px">
          <button ejs-button class="btn" (click)="click()">Get selected row indexes</button>
        </div>
        <p id="message" *ngIf="showMessage">Selected row indexes: {{ selectedRowIndexes }}</p>
        <ejs-grid #grid [dataSource]="data" height="315px" 
        [selectionSettings]="selectionOptions">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
            width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="150">
            </e-column>
            <e-column field="ShipCity" headerText="Ship City" width="150">
            </e-column>
            <e-column field="ShipName" headerText="Ship Name" width="150">
            </e-column>
          </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public selectedRowIndexes: number[] = [];
  public selectionOptions?: SelectionSettingsModel;
  public showMessage = false;

  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple' };
  }
  click() {
    this.selectedRowIndexes = (this.grid as GridComponent).getSelectedRowIndexes();
    this.showMessage = this.selectedRowIndexes.length > 0;
  }
}
