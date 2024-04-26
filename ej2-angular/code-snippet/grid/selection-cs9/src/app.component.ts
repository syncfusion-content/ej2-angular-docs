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
          <label>Enable/Disable simple multiple row selection</label>
          <ejs-switch id="switch" [(checked)]="enableSelection" 
          (change)="toggleRowSelection()"></ejs-switch>
        </div>
        <ejs-grid #grid [dataSource]="data" [selectionSettings]="selectionOptions" 
        height="315px">
        <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
            width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
            <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
            <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
        </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {
  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;
  public enableSelection = false;
  @ViewChild('grid') grid!: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple' };
  }
  toggleRowSelection(): void {
    this.grid.selectionSettings.enableSimpleMultiRowSelection = this.enableSelection;
  }
}
