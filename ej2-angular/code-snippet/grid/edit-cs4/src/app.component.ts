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
import { productData } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell, GridComponent, CellEditArgs
} from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs, NumericTextBox } from '@syncfusion/ej2-inputs';

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
      <ejs-grid #grid id="grid" [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" 
      height="273px" (cellEdit)="cellEdit($event)">
        <e-columns>
          <e-column field="ProductID" headerText="Product ID" textAlign="Right" isPrimaryKey="true" 
          width="100"></e-column>
          <e-column field="ProductName" headerText="Product Name" width="120"></e-column>
          <e-column field="UnitPrice" headerText="Unit Price" [edit]="priceParams" width="150" 
          format="C2" textAlign="Right"></e-column>
          <e-column field="UnitsInStock" headerText="Units In Stock" [edit]="stockParams" 
          width="150" textAlign="Right"></e-column>
          <e-column field="TotalCost" headerText="Total Cost" width="150" format="C2" 
          textAlign="Right"></e-column>
        </e-columns>
      </ejs-grid> `
})
export class AppComponent implements OnInit {

  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: Object[];
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public priceParams?: IEditCell;
  public stockParams?: IEditCell;
  public priceElem?: HTMLElement;
  public priceObj?: NumericTextBox;
  public stockElem?: HTMLElement;
  public stockObj?: NumericTextBox;

  ngOnInit(): void {
    this.data = productData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Batch'
    };
    this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
    this.priceParams = {
      create: () => {
        this.priceElem = document.createElement('input');
        return this.priceElem;
      },
      read: () => {
        return this.priceObj?.value;
      },
      destroy: () => {
        this.priceObj?.destroy();
      },
      write: (args: any) => {
        var rowData = args.rowData;
        var rowIndex = (this.grid as GridComponent).getRowInfo(args.row).rowIndex;
        this.priceObj = new NumericTextBox({
          value: args.rowData[args.column.field],
          change: ((args: ChangeEventArgs) => {
            var totalCostValue = (args.value as number) * rowData['UnitsInStock'];
            (this.grid as GridComponent).updateCell((rowIndex as number), 'TotalCost', totalCostValue);
          }).bind(this)
        });
        this.priceObj?.appendTo(this.priceElem);
      }
    };
    this.stockParams = {
      create: () => {
        this.stockElem = document.createElement('input');
        return this.stockElem;
      },
      read: () => {
        return (this.stockObj as  NumericTextBox).value;
      },
      destroy: () => {
        (this.stockObj as  NumericTextBox).destroy();
      },
      write: (args: any) => {
        var rowData = args.rowData;
        var rowIndex = (this.grid as GridComponent).getRowInfo(args.row).rowIndex;
        this.stockObj = new NumericTextBox({
          value: args.rowData[args.column.field],
          change: ((args: ChangeEventArgs) => {
            var totalCostValue = (args.value as number) * rowData['UnitPrice'];
            (this.grid as GridComponent).updateCell((rowIndex as number), 'TotalCost', totalCostValue);
          }).bind(this)
        });
        this.stockObj.appendTo(this.stockElem);
      }
    };
  }
  cellEdit(args: CellEditArgs) {
    if (args.columnName == 'TotalCost') {
      args.cancel = true;
    }
  }
}


