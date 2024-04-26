import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { data ,Order} from './datasource';
import {
  GridComponent,
  SelectionSettingsModel,
  PageSettingsModel,
  RowSelectingEventArgs,
  RowSelectEventArgs,
  RowDeselectEventArgs,
  RowDeselectingEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
imports: [
        
        GridModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
        <p id="message">{{ message }}</p>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid
            #grid
            [enableHover]='false'
            [dataSource]="data"
            [selectionSettings]="selectionOptions"
            (rowSelected)="rowSelected($event)"
            (rowSelecting)="rowselecting($event)"
            (rowDeselected)="rowDeselected($event)"
            (rowDeselecting)="rowDeselecting($event)">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
              </e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="120">
              </e-column>
              <e-column field="ShipCountry" headerText="Ship Country" width="130">
              </e-column>
              <e-column field="Freight" headerText="Freight" format="C2" width="100">
              </e-column>
            </e-columns>
          </ejs-grid>
        </div>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public selectionOptions?: SelectionSettingsModel;
  public pageOptions?: PageSettingsModel;
  public message?: string;

  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('dialogComponent') public dialog?: DialogComponent;
  public selectedCellCount: number = 0;
  public dialogVisible: boolean = false;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { mode: 'Row', type: 'Multiple' };
    this.pageOptions = { pageSize: 5 };
  }
  rowselecting(args: RowSelectingEventArgs): void {
    this.message = `Trigger rowSelecting`;
    if ((args.data as Order).CustomerID == 'VINET')
      args.cancel = true;
  }
  rowSelected(args: RowSelectEventArgs): void {
    this.message = ` Trigger rowSelected`;
    if ((args.data as Order).Freight > 10 || (args.data as Order).Freight <= 140)
      (args.row as HTMLElement).style.backgroundColor = 'rgb(96, 158, 101)'; 
  }
  rowDeselected(args: RowDeselectEventArgs ): void {
    this.message = `Trigger rowDeselected`;
    if ((args.data as Order).Freight <= 10)
    (args.row as HTMLElement).style.backgroundColor = 'red';
  }
  rowDeselecting(args: RowDeselectingEventArgs): void {
    this.message = `Trigger rowDeselecting`;
    if ((args.data as Order).Freight > 140)
    (args.row as HTMLElement).style.backgroundColor = 'yellow';
  }
}
