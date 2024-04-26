import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        SwitchModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
      <div style="padding: 0px 0px 20px 0px">
        <label>Enable/Disable column selection</label>
        <ejs-switch id="switch" [(checked)]="columnSelection" 
        (change)="toggleColumnSelection()">
        </ejs-switch>
      </div>
      <div style="padding: 20px 0px 0px 0px">
      <ejs-grid #grid [dataSource]="data" [selectionSettings]="selectionOptions" 
      height="315px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
          width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="150">
          </e-column>
          <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
          <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
        </e-columns>
      </ejs-grid>
      </div>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;
  public columnSelection = false;
  @ViewChild('grid') grid!: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple' };
  }
  toggleColumnSelection(): void {
    (this.grid as GridComponent).selectionSettings.allowColumnSelection = this.columnSelection;
  }
}
