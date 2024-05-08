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
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations'

import { Component, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-buttons';

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
        ToolbarModule ,
        DropDownListModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
  selector: 'app-root',
  template: `
      <div style="display: flex">
        <ejs-toolbar (clicked)="onToolbarClick($event)">
          <e-items>
              <e-item text="Add" id="add"></e-item>
              <e-item text="Edit" id="edit"></e-item>
              <e-item text="Delete" id="delete"></e-item>
              <e-item text="Update" id="update"></e-item>
              <e-item text="Cancel" id="cancel"></e-item>
          </e-items>
      </ejs-toolbar>
      </div>
      <div style="padding-top:20px">
          <ejs-grid #grid id='Batchgrid' [dataSource]='data' allowPaging='true' [pageSettings]='pageSettings'
            [editSettings]='editSettings'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true'
                [validationRules]='orderIDRules'></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width='120' [validationRules]='customerIDRules'
                ></e-column>
              <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'
                editType='numericedit' [validationRules]='freightRules' >
              </e-column>
              <e-column field='OrderDate' headerText='Order Date' width='130' format='yMd' editType='datepickeredit'
                textAlign='Right' ></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'
                [edit]='editparams' ></e-column>
            </e-columns>
          </ejs-grid>
      </div>`,
  })
export class AppComponent {
  public data?: Object[];
  @ViewChild('grid') public grid?: GridComponent;
  public editSettings?: Object;
  public orderIDRules?: Object;
  public customerIDRules?: Object;
  public freightRules?: Object;
  public editparams?: Object;
  public pageSettings?: Object;
   public currentColumn: any;
  public ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.orderIDRules = { required: true, number: true };
    this.customerIDRules = { required: true };
    this.freightRules = { required: true };
    this.editparams = { params: { popupHeight: '300px' } };
    this.pageSettings = { pageCount: 5 };
  }

  public onToolbarClick(args: ClickEventArgs): void {
    switch ((args as any).item.id) {
      case 'add':
        (this.grid as GridComponent).addRecord();
        break;
      case 'edit':
        (this.grid as GridComponent).startEdit();
        break;
      case 'delete':
        (this.grid as GridComponent).deleteRecord();
        break;
      case 'update':
        (this.grid as GridComponent).endEdit();
        break;
      case 'cancel':
        (this.grid as GridComponent).closeEdit();
        break;
    }
  }
}
