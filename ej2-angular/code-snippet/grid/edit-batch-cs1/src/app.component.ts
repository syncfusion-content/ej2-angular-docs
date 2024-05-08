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


import { Component, ViewChild, OnInit } from '@angular/core';
import { data } from './datasource';
import { CellSaveArgs,GridComponent } from '@syncfusion/ej2-angular-grids';

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
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  @ViewChild('normalgrid')
  public grid?: GridComponent;
  public data?: Object[];
  public editSettings?: Object;
  public toolbar?: string[];
  public orderIDRules?: Object;
  public customerIDRules?: Object;
  public freightRules?: Object;
  public editparams?: Object;
  public pageSettings?: Object;
  public formatoptions?: Object;

  public ngOnInit(): void {
    this.data = data.slice(0, 15);
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      showConfirmDialog:false,
      mode: 'Batch',
    };
    this.toolbar = ['Add', 'Delete'];
    this.orderIDRules = { required: true, number: true };
    this.customerIDRules = { required: true };
    this.freightRules = { required: true };
    this.editparams = { params: { popupHeight: '300px' } };
    this.pageSettings = { pageCount: 5 };
    this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
  }
  save(args: CellSaveArgs) {
    this.grid?.editModule.batchSave();
  }
}

