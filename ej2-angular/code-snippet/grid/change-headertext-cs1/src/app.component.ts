import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs'

import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        DropDownListAllModule,
        TextBoxModule
    ],

providers: [PageService],
standalone: true,
  selector: 'app-root',
  template: `<div style="display: flex">
             <label style="padding: 30px 20px 0 0" > Select column name  :</label>
              <ejs-dropdownlist  #dropdown style="padding: 26px 0 0 0" index='0' width="220" 
              [dataSource]="columns"  [fields]="field"></ejs-dropdownlist>
            </div>
            <div>
              <label style="padding: 30px 17px 0 0" >Enter new header text :</label>
              <ejs-textbox #textbox required placeholder="Enter new header text" width="220">
              </ejs-textbox>
              <button ejs-button style="margin-left: 10px" id="buttons" (click)="changeHeaderText()">Change</button>
            </div>
            <div style="padding: 20px 17px 0 0">
              <ejs-grid #grid [dataSource]="data" allowPaging='true'>
                <e-columns>
                  <e-column field="OrderID" headerText="Order ID" width="120"></e-column>
                  <e-column field="CustomerID" headerText="Customer ID" width="140">
                  </e-column>
                  <e-column field="Freight" headerText="Freight" format="C" width="120">
                  </e-column>
                  <e-column field="OrderDate" headerText="Order Date" format="yMd"
                   width="140"></e-column>
                </e-columns>
              </ejs-grid>
            </div>`
})
export class AppComponent {

  public data?: Object[] = data;
  public columns: Object[] = [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'Order Date', value: 'OrderDate' },
  ];
  public field?: Object = { text: 'text', value: 'value' };
  @ViewChild('dropdown') public dropdown?: DropDownListComponent;
  @ViewChild('textbox') public textbox?: TextBoxComponent;
  @ViewChild('grid')
  public grid?: GridComponent;

  public ChangeHeaderText(): void {
    if ((this.textbox as TextBoxComponent).element.value.trim() !== '') {
      const column = (this.grid as GridComponent).getColumnByField(
        (((this.dropdown as DropDownListComponent).value as string))
      );
      column.headerText = (this.textbox as TextBoxComponent).element.value;
      (this.grid as GridComponent).refreshHeader();
    }
  }

}
