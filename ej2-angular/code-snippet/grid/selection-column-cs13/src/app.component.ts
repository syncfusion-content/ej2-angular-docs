import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
  GridComponent,
  SelectionSettingsModel,
  PageSettingsModel,
  ColumnSelectEventArgs,
  ColumnSelectingEventArgs,
  ColumnDeselectEventArgs,
  Column,
} from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
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
  columnSelected(args: ColumnSelectEventArgs): void {
    this.message = `Trigger columnSelected`;
    (args.headerCell as HTMLElement).style.backgroundColor = 'rgb(96, 158, 101)';

  }
  columnselecting(args: ColumnSelectingEventArgs ): void {
    this.message = `Trigger columnSelecting`;
    if ((args.column as Column).field == "CustomerID")
      args.cancel = true;
  }
  columnDeselected(args: ColumnDeselectEventArgs ): void {
    this.message = `Trigger columnDeselected`;
    (args.headerCell as HTMLElement).style.backgroundColor = 'rgb(245, 69, 69)';
  }
  columnDeselecting(args: ColumnDeselectEventArgs ): void {
    this.message = `Trigger columnDeselecting`;
    if ((args.column as Column).field == "Freight")
      args.cancel = true;
  }
}
