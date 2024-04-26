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

import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, Column } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

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
        DropDownListModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public data?: Object[];
  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('dropdown') public dropdown?: DropDownListComponent;
  public editSettings?: Object;
  public toolbar?: string[];
  public orderIDRules?: Object;
  public customerIDRules?: Object;
  public freightRules?: Object;
  public editparams?: Object;
  public pageSettings?: Object;
  public alignmentData: Object[] = [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'Order Date', value: 'OrderDate' },
    { text: 'Ship Country', value: 'ShipCountry' },
  ];
  public dropdownFields: Object = { text: 'text', value: 'value' }; // Define fields for the dropdown
  public currentColumn?: Column;
  public ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
    this.orderIDRules = { required: true, number: true };
    this.customerIDRules = { required: true };
    this.freightRules = { required: true };
    this.editparams = { params: { popupHeight: '300px' } };
    this.pageSettings = { pageCount: 5 };
  }

  public changeAlignment(args: ChangeEventArgs): void {
    // Reset the allowEditing property of the previously selected column
    if (this.currentColumn) {
      this.currentColumn.allowEditing = true;
    }
    // Update the 'allowEditing' property for the selected column
    this.currentColumn = this.grid?.getColumnByField((args.value as string)) as Column;
    this.currentColumn.allowEditing = false;
  }
}
