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
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { purchaseData } from './datasource';
import { Column, EditSettingsModel, PageSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

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
  template: `<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [editSettings]='editSettings' [pageSettings]='pageOptions' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true'  width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type= 'string' [edit]='daParams' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' type= 'number' textAlign= 'Right' editType= 'numericedit' format= 'C2' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' type= 'date' format= 'yMd' editType= 'datepickeredit' width=150></e-column>
                </e-columns>
               </ejs-grid>`,
  providers: [ToolbarService, EditService, PageService],
})
export class AppComponent implements OnInit {
  public data?: object[];
  @ViewChild('grid') public grid?: GridComponent;
  public editSettings?: EditSettingsModel;
  public pageOptions?: PageSettingsModel;
  public toolbar?: ToolbarItems[];
  public daParams?: IEditCell;
  public inpuEle?: HTMLElement;
  public autoCompleteIns?: AutoComplete;
  public autoCompleteData: { [key: string]: Object }[] = [
    { CustomerID: 'VINET', Id: '1' },
    { CustomerID: 'TOMSP', Id: '2' },
    { CustomerID: 'HANAR', Id: '3' },
    { CustomerID: 'VICTE', Id: '4' },
    { CustomerID: 'SUPRD', Id: '5' },
  ];

  public createCustomerIDFn = () => {
    this.inpuEle = document.createElement('input');
    return this.inpuEle;
  }
  public destroyCustomerIDFn = () => {
    this.autoCompleteIns?.destroy();
  }
  public readCustomerIDFn = () => {
    return this.autoCompleteIns?.value;
  }
  public writeCustomerIDFn = (args: any) => {
    this.autoCompleteIns = new AutoComplete({
      allowCustom: true,
      value: args.rowData[args.column.field],
      dataSource: this.autoCompleteData ,
      fields: { value: 'CustomerID', text: 'CustomerID' },
    });
    this.autoCompleteIns?.appendTo(this.inpuEle);
  }

  ngOnInit(): void {
    this.data = purchaseData;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.pageOptions = { pageSizes: true, pageSize: 8 };
    this.daParams = {
      create: this.createCustomerIDFn,
      read: this.readCustomerIDFn,
      destroy: this.destroyCustomerIDFn,
      write: this.writeCustomerIDFn
    };
  }
}



