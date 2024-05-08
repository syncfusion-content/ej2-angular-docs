import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource'; // Replace with your data source
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import {  SwitchComponent } from '@syncfusion/ej2-angular-buttons';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
imports: [
        
        GridModule,
        SwitchModule,
        DropDownListModule 
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
      <div style="display: flex">
        <label style="padding: 30px 17px 0 0">Choose cell selection mode:</label>
        <ejs-dropdownlist style="padding: 26px 0 0 0" index="0" width="150" 
        [dataSource]="dropdownData" (change)="valueChange($event)">
        </ejs-dropdownlist>
      </div>
      <div style="padding: 20px 0px 20px 0px">
      <label>Enable/Disable Toggle selection</label>
      <ejs-switch #switch id="switch" [checked]="true" 
      (change)="toggleColumnSelection($event)">
      </ejs-switch>
      </div>
      <div style="padding: 20px 0px 0px 0px">
        <ejs-grid #grid [dataSource]="data" [selectionSettings]="selectionOptions" 
        height="315px">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
            width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
            <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
            <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
          </e-columns>
        </ejs-grid>
      </div>
    `
})
export class AppComponent implements OnInit {

  public data?: object[];
  public enableToggleSelection = true;

  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('switch') public switch?: SwitchComponent;

  public selectionOptions?: SelectionSettingsModel;
  public dropdownData: Object[] = [
    { text: 'Row', value: 'Row' },
    { text: 'Cell', value: 'Cell' },
    { text: 'Both', value: 'Both' },
  ];

  ngOnInit(): void {
    this.data = data; 
    this.selectionOptions = { type: 'Multiple' };
  }
  toggleColumnSelection(args: CustomChangeEventArgs): void {
    (this.grid as GridComponent).selectionSettings.enableToggle = args.checked;
  }
  valueChange(args: ChangeEventArgs): void {
    ((this.grid as GridComponent).selectionSettings.mode as SelectionMode) = (args.value as SelectionMode);
  }
}

interface CustomChangeEventArgs extends ChangeEventArgs {
  checked: boolean;
}