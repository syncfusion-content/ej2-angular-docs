import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { CheckBoxModule} from '@syncfusion/ej2-angular-buttons'

import { Component, ViewChild } from '@angular/core';
import { orderDetails, columnDataType } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

@Component({
imports: [
        
        GridModule,
        CheckBoxModule
    ],

,
standalone: true,
  selector: 'app-root',
  template: `<div style="padding:2px 0px 0px 0px">
                <ejs-checkbox #checkbox label='Show / Hide Row' 
                (change)="onCheckBoxChange($event)"></ejs-checkbox>
            </div>
            <p id="message">{{ message }}</p>
            <ejs-grid #grid [dataSource]='data' height='350'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' 
                    textAlign='Right'></e-column>
                    <e-column field='CustomerID' headerText='Customer Name' width='150'>
                    </e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='130' 
                    format="yMd" textAlign='Right'>
                    </e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' 
                    textAlign='Right'>
                    </e-column>
                    <e-column field='ShippedDate' headerText='Shipped Date' width='130' 
                    format="yMd" textAlign='Right'>
                    </e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150'>
                    </e-column>
                </e-columns>
            </ejs-grid>`,
})
export class AppComponent {

  public data: Object[] = [];
  public rowIndex?: number;
  public hiddenRows: number[] = [];
  @ViewChild('grid')
    public grid?: GridComponent;
  public message?: string = '';

  ngOnInit(): void {
    this.data = orderDetails;
  }

  public onCheckBoxChange(args: ChangeEventArgs) {
    if (args.checked) {
      for (let i = 0; i < (this.grid as GridComponent).getRowsObject().length; i++) {
        if (((this.grid as GridComponent).getRowsObject()[i].data as columnDataType).CustomerID === 'VINET') {
          // check the row value
          this.rowIndex = (this.grid as GridComponent).getRowsObject()[i].index; //get particular row index
          ((this.grid as GridComponent).getRowByIndex(this.rowIndex) as HTMLElement).style.display =
            'none'; //hide row
          this.hiddenRows.push((this.rowIndex as number)); // add row index to hiddenRows array
        }
      }
      if (this.hiddenRows.length > 0) {
        this.message = `Rows with a customer name column value of VINET have been hidden`;
      }
    } else {
      // Show hidden rows
      this.hiddenRows.forEach((rowIndex: number) => {
        ((this.grid as GridComponent).getRowByIndex(rowIndex) as HTMLElement).style.display = '';
      });
      this.hiddenRows = [];
      this.message = 'Show all hidden rows';
    }
  }
}
