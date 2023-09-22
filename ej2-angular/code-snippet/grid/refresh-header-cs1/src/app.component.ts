import { Component, ViewChild, OnInit } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  template: `<button ejs-button (click)="refreshHeader()">Refresh Header</button>
            <div class="control-section" style='padding:20px 0px 0px 0px'>
              <ejs-grid #grid [dataSource]="data">
                <e-columns>
                  <e-column field="OrderID" headerText="Order ID" 
                  (dataBound)='onDataBound($event)'></e-column>
                  <e-column field="CustomerID" headerText="Customer ID"></e-column>
                  <e-column field="OrderDate" headerText="Order Date" format="yMd">
                  </e-column>
                  <e-column field="Freight" headerText="Freight"></e-column>
                </e-columns>
              </ejs-grid>
            </div>`
})
export class AppComponent implements OnInit {

  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: Object[];

  ngOnInit(): void {
    this.data = data;
  }
  public refreshHeader(): void {
    const column = (this.grid as any).getColumnByIndex(1);
    column.headerText = 'New Header Text'; // update the header text of the column object
    (this.grid as any).refreshHeader(); // refresh the grid header
  }
  public onDataBound(args: any): void {
  }
}
