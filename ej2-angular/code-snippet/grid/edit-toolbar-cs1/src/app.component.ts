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

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {EditSettingsModel,ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
  selector: 'app-root',
  template: `
            <ejs-grid [dataSource]='data' [toolbar]='toolbar' [editSettings]='editSettings' 
            [selectionSettings]="selectOptions"  height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    isPrimaryKey='true' [validationRules]='orderIDRules' width=100>
                    </e-column>
                    <e-column field='CustomerID' headerText='Customer ID' 
                    [validationRules]='customerIDRules' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                    editType= 'numericedit' width=120 format= 'C2'
                    [validationRules]='freightIDRules'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' 
                    editType= 'dropdownedit' width=150></e-column>
                </e-columns>
            </ejs-grid>`,
})
export class AppComponent implements OnInit {

  public data?: object[];
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public selectOptions?: Object;
  public orderIDRules?: object;
  public customerIDRules?: object;
  public freightIDRules?: object;
 
  ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
    };
    this.orderIDRules = { required: true };
    this.customerIDRules = { required: true, minLength: 5 };
    this.freightIDRules={required: true, min: 1, max:1000 }
    this.toolbar = ['Delete'];
    this.selectOptions = { type: 'Multiple' };
  }

}