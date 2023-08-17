import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
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
  public grid: any;
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
  clickDelete(args:any) {
    const selectedRows: any[] = this.grid.getSelectedRows();
    selectedRows.forEach((row: HTMLTableRowElement) => {
      this.grid.deleteRow(row);
    });
}

}