import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Order, data } from './datasource';
import {
  GridComponent,
  SelectionSettingsModel,
  PageSettingsModel,
  CellSelectEventArgs,
  CellSelectingEventArgs,
  CellDeselectEventArgs
} from '@syncfusion/ej2-angular-grids';

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
  cellSelected(args: CellSelectEventArgs): void {
    this.message = ` Trigger cellSelected`;
    (args.currentCell as HTMLElement).style.backgroundColor = 'rgb(96, 158, 101)';
  }
  cellselecting(args:CellSelectingEventArgs ): void {
    this.message = `Trigger cellSelecting`;
    if ((args.data as Order).ShipCountry == 'France')
      args.cancel = true;
  }
  cellDeselected(args: CellDeselectEventArgs ): void {
    this.message = `Trigger cellDeselected`;
    if (args.cells && args.cells.length > 0) {
      (args.cells[0] as HTMLElement).style.backgroundColor = 'rgb(245, 69, 69)';
    }
  }
  cellDeselecting(args: CellDeselectEventArgs): void {
    this.message = `Trigger cellDeselecting`;
    if (args.cells && args.cells.length > 0) {
      (args.cells[0] as HTMLElement).style.color = 'rgb(253, 253, 253)';
    }  
  }
}
