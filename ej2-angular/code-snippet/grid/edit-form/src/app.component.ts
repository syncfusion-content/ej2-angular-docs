import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule, NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, ViewChild } from '@angular/core';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import{ data } from "./datasource"

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
        ButtonModule,
        NumericTextBoxAllModule,
        DropDownListModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
  selector: 'app-root',
  template: `
         <div class="row" >
              <div class="col-xs-6 col-md-3">
                <div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="orderedit">OrderID</label>
                      <input class="form-control" [(ngModel)]="selectedProduct.OrderID" type="number" disabled />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="customeredit">CustomerID</label>
                      <ejs-textbox [(value)]="selectedProduct.CustomerID"></ejs-textbox>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="freightedit">Frieght</label>
                      <ejs-numerictextbox [(value)]="selectedProduct.Freight"></ejs-numerictextbox>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="countryedit">ShipCountry</label>
                      <ejs-dropdownlist [(value)]="selectedProduct.ShipCountry" [dataSource]="dropdown" [fields]="dropdownFields">
                      </ejs-dropdownlist>
                    </div>
                  </div>
                </div>
                <button ejs-button id="btn" (click)="save()">Save</button>
              </div>
              <div class="col-xs-6 col-md-9">
                <ejs-grid #grid [dataSource]="orders" height="315" width="500px" (rowSelected)="rowSelectHandler($event)" [editSettings]="editSettings">
                  <e-columns>
                    <e-column field="OrderID" headerText="OrderID" isPrimaryKey="true" textAlign="Right" width="120"></e-column>
                    <e-column field="CustomerID" headerText="CustomerID" textAlign="Right" width="120"></e-column>
                    <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="120"></e-column>
                    <e-column field="ShipCountry" headerText="ShipCountry" textAlign="Right" width="120"></e-column>
                  </e-columns>
                </ejs-grid>
              </div>
            </div>
           `,
})
export class AppComponent {

  public orders:Object[] = data;
  @ViewChild('grid') public grid?:GridComponent;
  public dropdown: Object[] = [
    { shipCountry: 'Germany' },
    { shipCountry: 'Brazil' },
    { shipCountry: 'France' },
    { shipCountry: 'Belgium' },
    { shipCountry: 'Switzerland' },
    { shipCountry: 'Venezuela' },
    { shipCountry: 'USA' },
    { shipCountry: 'Mexico' },
    { shipCountry: 'Italy' },
    { shipCountry: 'Sweden' },
    { shipCountry: 'Finland' },
    { shipCountry: 'Spain' },
    { shipCountry: 'Canada' },
    { shipCountry: 'Portugal' },
    { shipCountry: 'Denmark' },
    { shipCountry: 'Austria' },
    { shipCountry: 'UK' },
    { shipCountry: 'Ireland' },
    { shipCountry: 'Norway' },
    { shipCountry: 'Argentina' },
  ];
  public selectedProduct: Order = new Order();
  public dropdownFields: Object = { text: 'shipCountry', value: 'shipCountry' };
  public editSettings: Object = { allowEditing: true };

  save(): void {
    const index = (this.grid as GridComponent).getSelectedRowIndexes()[0];
    (this.grid as GridComponent).updateRow(index, this.selectedProduct);
   }

  rowSelectHandler(args: RowSelectEventArgs ): void {
    (this as any).selectedProduct = { ...args.data }; 
  } 
}

export class Order {
  OrderID?: number;
  CustomerID?: string;
  Freight?: number;
  ShipCountry?: string;
}

