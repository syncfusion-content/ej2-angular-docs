import { Component, ViewChild } from '@angular/core';
import { orderDetails } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
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

  public onCheckBoxChange(args: any) {
    if ((args as any).checked) {
      for (let i = 0; i < (this.grid as any).getRowsObject().length; i++) {
        if (((this.grid as any).getRowsObject()[i].data as any).CustomerID === 'VINET') {
          // check the row value
          this.rowIndex = (this.grid as any).getRowsObject()[i].index; //get particular row index
          ((this.grid as any).getRowByIndex(this.rowIndex) as any).style.display =
            'none'; //hide row
          (this.hiddenRows as any).push(this.rowIndex); // add row index to hiddenRows array
        }
      }
      if ((this.hiddenRows as any).length > 0) {
        this.message = `Rows with a customer name column value of VINET have been hidden`;
      }
    } else {
      // Show hidden rows
      (this.hiddenRows as any).forEach((rowIndex: number) => {
        ((this.grid as any).getRowByIndex(rowIndex) as any).style.display = '';
      });
      this.hiddenRows = [];
      this.message = 'Show all hidden rows';
    }
  }
}
