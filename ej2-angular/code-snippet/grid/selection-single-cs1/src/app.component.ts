import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService, SelectionService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, RowSelectingEventArgs, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService, SelectionService],
standalone: true,
  selector: 'app-root',
  template: `
      <ejs-grid #grid [dataSource]="data" allowPaging="true" 
      (rowSelecting)="rowselecting($event)" [selectionSettings]="selectionOptions" >
        <e-columns>
          <e-column type="checkbox" width="100"></e-column>
          <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right">
          </e-column>
          <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
          <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" 
          textAlign="Right"></e-column>
          <e-column field="Freight" headerText="Freight" width="120" format="C2" 
          textAlign="Right"></e-column>
          <e-column field="ShippedDate" headerText="Shipped Date" width="130" 
          format="yMd" textAlign="Right"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="150">
          </e-column>
        </e-columns>
      </ejs-grid>`
})

export class AppComponent implements OnInit {

  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;
  public columnSelection = false;
  @ViewChild('grid') grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Single', checkboxMode: 'ResetOnRowClick' };
  }
  rowselecting(args: RowSelectingEventArgs): void {  
    if (args.target && args.target.classList.contains('e-icons'))
      (this.grid as GridComponent).clearSelection();
  }
}
