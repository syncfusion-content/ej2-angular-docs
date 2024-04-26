import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule,
        SwitchModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
  selector: 'app-root',
  template: `
        <div style="padding: 20px">
          <label>Enable/Disable show delete confirmation dialog</label>
          <ejs-switch id="switch1" [(checked)]="enableShowDeleteConfirmDialog" 
          (change)="toggleShowDeleteConfirmDialog()"></ejs-switch>
        </div>
        <ejs-grid #grid [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" height="273px">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" [validationRules]="orderIDRules"
              isPrimaryKey="true" width="100"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" [validationRules]="customerIDRules" width="120"></e-column>
            <e-column field="Freight" headerText="Freight" textAlign="Right" editType="numericedit" width="120" format="C2"
              [validationRules]="freightRules"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit" width="150"></e-column>
          </e-columns>
        </ejs-grid> `
})
export class AppComponent implements OnInit {
  
  @ViewChild('grid')
  public grid?: GridComponent;

  public data: object[] = [];
  public editSettings: EditSettingsModel = {};
  public toolbar: ToolbarItems[] = ['Add', 'Delete', 'Update', 'Cancel'];
  public orderIDRules: Object = {};
  public customerIDRules: Object = {};
  public freightRules: Object = {};
  public enableShowConfirmDialog: boolean = true;
  public enableShowDeleteConfirmDialog: boolean = false;

  ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal'
    };
    this.orderIDRules = { required: true, number: true };
    this.customerIDRules = { required: true };
    this.freightRules = { min: 1, max: 1000 };
  }
  toggleShowDeleteConfirmDialog(): void {
    (this.grid as GridComponent).editSettings.showDeleteConfirmDialog = this.enableShowDeleteConfirmDialog;
  }
  
}
