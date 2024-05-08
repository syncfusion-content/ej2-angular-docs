import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

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
        <ejs-switch id="switch"  (change)="toggleColumnSelection($event)">
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
  @ViewChild('grid') grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple', mode: 'Both' };
  }

  toggleColumnSelection(args: ChangeEventArgs): void {
    (this.grid as GridComponent).selectionSettings.enableToggle = !(args.checked as boolean);
  }
}






