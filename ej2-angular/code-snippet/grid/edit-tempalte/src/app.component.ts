import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService,ForeignKeyService , PageService } from '@syncfusion/ej2-angular-grids'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule ,ComboBoxModule} from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit } from '@angular/core';
import { data, employeeData,columnDataType } from './datasource';
import {
  EditSettingsModel,
  ToolbarItems,
  SaveEventArgs,
} from '@syncfusion/ej2-angular-grids';

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
         DropDownListModule,
         ComboBoxModule
    ],

providers: [EditService, ToolbarService, SortService, ForeignKeyService,PageService],
standalone: true,
  selector: 'app-root',
  template: `
        <ejs-grid [dataSource]="data" height="315" [editSettings]="editSettings"  [allowPaging]="true" [toolbar]="toolbar" (actionBegin)=" actionBegin($event)">
          <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" isPrimaryKey="true" width="120"></e-column>
              <e-column field="EmployeeID" headerText="Employee Name" foreignKeyValue='FirstName'  [dataSource]="employeeData" width="150">
                  <ng-template #editTemplate let-data>
                      <ejs-combobox [(value)]="orderData.EmployeeID" [dataSource]="employees" [fields]="comboFields" >
                      </ejs-combobox>
                  </ng-template>
              </e-column>
              <e-column field="OrderDate" headerText="Order Date" format="yMd" type="date" textAlign="Right" width="130"></e-column>
              <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="120"></e-column>
          </e-columns>
      </ejs-grid>`
})
export class AppComponent implements OnInit {
  public data?: object[];
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public orderData?: object | any;
  public orderIDRules?: object;
  public customerIDRules?: object;
  public employeeIDRules?: object;
  public employees: object[] = [];
  public employeeData: Object[] = employeeData;
  public comboFields: Object = { text: 'FirstName', value: 'EmployeeID' };

  ngOnInit(): void {
    this.data = data;
    this.orderIDRules = { required: true };
    this.customerIDRules = { required: true };
    this.employeeIDRules = { required: true };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.employees = [
      { FirstName: 'Nancy', EmployeeID: 1 },
      { FirstName: 'Andrew', EmployeeID: 6 },
      { FirstName: 'Janet', EmployeeID: 3 },
      { FirstName: 'Margaret', EmployeeID: 4 },
      { FirstName: 'Steven', EmployeeID: 5 },
      { FirstName: 'Laura', EmployeeID: 8 }
    ];
  }
  actionBegin(args: SaveEventArgs) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      (args.data as columnDataType)['EmployeeID'] = this.orderData['EmployeeID'];
    }
  }
}
