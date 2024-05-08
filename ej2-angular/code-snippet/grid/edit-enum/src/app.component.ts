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
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-angular-grids';

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
  template: `<ejs-grid [dataSource]="details" [editSettings]="editSettings" [toolbar]="toolbar" (actionBegin)="actionBegin($event)">
    <e-columns>
      <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" textAlign="Right" width="90"></e-column>
      <e-column field="CustomerID" headerText="Employee Name" textAlign="Left" width="100"></e-column>
      <e-column field="FeedbackDetails" headerText="Employee Feedback" textAlign="Left" width="120">
        <ng-template #editTemplate let-data>
          <ejs-dropdownlist [(ngModel)]="orderData.FeedbackDetails" [dataSource]="dropDownEnumValue" [fields]="dropdownFields" popupHeight="150px">
          </ejs-dropdownlist>
        </ng-template>
      </e-column>
    </e-columns>
  </ejs-grid>`
})
export class AppComponent implements OnInit {

  public details?: EmployeeDetails[];
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public orderData?: EmployeeDetails | any;
  public orderIDRules?: object;
  public customerIDRules?: object;
  public freightRules?: object;
  public dropDownEnumValue: string[] = [];
  public dropdownFields: Object = { text: 'FeedbackDetails', value: 'FeedbackDetails' };

  ngOnInit(): void {
    this.details = data as EmployeeDetails[];
    this.orderIDRules = { required: true };
    this.freightRules = { required: true, min: 1, max: 1000 };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.dropDownEnumValue = Object.keys(Feedback).filter((key: string) => !isNaN(Number((Feedback as any)[key])));
  }

  actionBegin(args: SaveEventArgs) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      (args.data as EmployeeDetails)['FeedbackDetails'] = this.orderData['FeedbackDetails'];
    }
  }

}

export interface EmployeeDetails {
  OrderID: number;
  CustomerID: string;
  FeedbackDetails: Feedback;
}

export enum Feedback {
  Positive = 0,
  Negative = 1,
}
