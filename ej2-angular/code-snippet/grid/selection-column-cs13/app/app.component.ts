import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
  GridComponent,
  SelectionSettingsModel,
  PageSettingsModel,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `<p id="message">{{ message }}</p>
            <div style="padding: 20px 0px 0px 0px">
              <ejs-grid
                #grid
                [dataSource]="data"
                [selectionSettings]="selectionOptions"
                (columnSelected)="columnSelected($event)"
                (columnSelecting)="columnselecting($event)"
                (columnDeselected)="columnDeselected($event)"
                (columnDeselecting)="columnDeselecting($event)">
                <e-columns>
                  <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
                  width="120"></e-column>
                  <e-column field="CustomerID" headerText="Customer ID" width="120">
                  </e-column>
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
  public message?: string;
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { allowColumnSelection: true };
    this.pageOptions = { pageSize: 5 };
  }
  columnSelected(args: any): void {
    this.message = `Trigger columnSelected`;
    args.headerCell.style.backgroundColor = 'rgb(96, 158, 101)';

  }
  columnselecting(args: any): void {
    this.message = `Trigger columnSelecting`;
    if (args.column.field == "CustomerID")
      (args as any).cancel = true;
  }
  columnDeselected(args: any): void {
    this.message = `Trigger columnDeselected`;
    args.headerCell.style.backgroundColor = 'rgb(245, 69, 69)';
  }
  columnDeselecting(args: any): void {
    this.message = `Trigger columnDeselecting`;
    if (args.column.field == "Freight")
      (args as any).cancel = true;
  }
}
