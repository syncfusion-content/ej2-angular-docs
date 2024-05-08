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
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

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
        ButtonModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
  selector: 'app-root',
  template: `
          <button ejs-button id='delete' (click)='clickDelete($event)'>Delete Multiple
          </button>
          <div class="control-section"  style="padding-top:20px">
          <ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' 
          [selectionSettings]="selectOptions"  height='273px'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
              isPrimaryKey='true' [validationRules]='orderIDRules' width=100>
              </e-column>
              <e-column field='CustomerID' headerText='Customer ID' 
              [validationRules]='customerIDRules' width=120></e-column>
              <e-column field='Freight' headerText='Freight' 
              textAlign= 'Right' editType= 'numericedit' width=120 
              format= 'C2' [validationRules]='freightIDRules'></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' 
              editType= 'dropdownedit' width=150></e-column>
              </e-columns>
            </ejs-grid>
            </div>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public editSettings?: EditSettingsModel;
  public selectOptions?: Object;
  @ViewChild('grid')
  public grid?: GridComponent;
  public orderIDRules?: object;
  public customerIDRules?: object;
  public freightIDRules?: object;

  ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.selectOptions = { type: 'Multiple' };
    this.orderIDRules = { required: true };
    this.customerIDRules = { required: true, minLength: 5 };
    this.freightIDRules={required: true, min: 1, max:1000 }
  }
  clickDelete(args:MouseEvent) {
    const selectedRows: Element[] = (this.grid as GridComponent).getSelectedRows();
    selectedRows.forEach((row:Element) => {
      (this.grid as GridComponent).deleteRow(row as HTMLTableRowElement);
    });
}

}