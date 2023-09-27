import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { data } from './datasource';
import {
  GridComponent,
  SelectionSettingsModel,
  PageSettingsModel
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `
        <p id="message">{{ message }}</p>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid #grid [dataSource]="data"
            [selectionSettings]="selectionOptions"
            (cellSelected)="cellSelected($event)"
            (cellSelecting)="cellselecting($event)"
            (cellDeselected)="cellDeselected($event)"
            (cellDeselecting)="cellDeselecting($event)">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
              width="120"></e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
              <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
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
  public message?: string;
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { mode: 'Cell', type: 'Multiple' };
    this.pageOptions = { pageSize: 5 };
  }
  cellSelected(args: any): void {
    this.message = ` Trigger cellSelected`;
    args.currentCell.style.backgroundColor = 'rgb(96, 158, 101)';
  }
  cellselecting(args: any): void {
    this.message = `Trigger cellSelecting`;
    if (args.data.ShipCountry == 'France')
      (args as any).cancel = true;
  }
  cellDeselected(args: any): void {
    this.message = `Trigger cellDeselected`;
    args.cells[0].style.backgroundColor = 'rgb(245, 69, 69)';

  }
  cellDeselecting(args: any): void {
    this.message = `Trigger cellDeselecting`;
    args.cells[0].style.color = 'rgb(253, 253, 253)';
  }
}
