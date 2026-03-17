import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { EditService, FreezeService, GridModule, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { DatePicker } from '@syncfusion/ej2-calendars';

@Component({
  imports: [GridModule],
  providers: [FreezeService, PageService, EditService, ToolbarService],
  standalone: true,
    selector: 'app-root',
    template: `
    <ejs-grid [dataSource]='data' height='250px' [frozenColumns]='2' [editSettings]='editSettings' [toolbar]='toolbar' allowPaging='true' [pageSettings]='pageSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 isPrimaryKey="true"></e-column>
        <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' [edit]='datePickerParams'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100 freeze='Left'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
      </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
  public data?: object[];
  public pageSettings?: Object;
  public toolbar?: string[];
  public editSettings?: Object;
  public datePickerParams?: Object;
  public datePickerObj!: DatePicker;
  ngOnInit(): void {
    this.data=data;
    this.pageSettings = { pageCount: 5 };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true };
    this.datePickerParams = {
      create: this.createDatePicker,
      read: this.readDatePicker,
      destroy: this.destroyDatePicker,
      write: this.writeDatePicker,
    };
  }
  public createDatePicker = (): HTMLElement => {
    return document.createElement('input');
  };
  public readDatePicker = (): Date => {
    return this.datePickerObj.value;
  };
  public destroyDatePicker = (): void => {
    this.datePickerObj.destroy();
  };
  public writeDatePicker = (args:any): void => {
    this.datePickerObj = new DatePicker({
      value: new Date(args.rowData[args.column.field]),
      floatLabelType: 'Never',
    });
    this.datePickerObj.appendTo(args.element);
  };
}