import { Component, OnInit, ViewChild } from '@angular/core';
import { orderDetails } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-root',
  template: `<div class="control-section">
              <ejs-grid #grid [dataSource]="data" allowPaging="true" 
              (dataBound)="dataBound($event)" height="320">
                <e-columns>
                  <e-column field="OrderID" headerText="Order ID" width="120" 
                  textAlign="Right"></e-column>
                  <e-column field="CustomerName" headerText="Customer Name" width="150">
                  </e-column>
                  <e-column field="Freight" headerText="Freight" width="120" format="C2" 
                  textAlign="Right"></e-column>
                  <e-column field="ShipCountry" headerText="Ship Country" width="150">
                  </e-column>
                </e-columns>
              </ejs-grid>
            </div>`
})
export class AppComponent implements OnInit {

  public data?: Object[];
  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit() {
    this.data = orderDetails;
  }
  dataBound(args: any) {
    (this.grid as any).getColumnHeaderByIndex(0).style.color = '#0d0b0b';
    (this.grid as any).getColumnHeaderByField('CustomerName').style.background = '#f45ddeab';
    (this.grid as any).getColumnHeaderByField('CustomerName').style.color = '#0d0b0b';
    (this.grid as any).getColumnHeaderByUid('grid-column2').style.background = '#f45ddeab';
    const columnIndex = (this.grid as any).getColumnIndexByField('ShipCountry');
    (this.grid as any).getColumnHeaderByIndex(columnIndex).style.color = '#0d0b0b';
    const index = (this.grid as any).getColumnIndexByUid('grid-column2');
    (this.grid as any).getColumnHeaderByIndex(index).style.color = '#0d0b0b';
  }

}
