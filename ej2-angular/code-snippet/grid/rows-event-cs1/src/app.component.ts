import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]="data" (dataBound)="customizeRows($event)">
                <e-columns>
                    <e-column field="OrderID" headerText="Order ID" textAlign="Right"
                    width="100"></e-column>
                    <e-column field="CustomerID" headerText="Customer ID" width="120">
                    </e-column>
                    <e-column field="Freight" headerText="Freight" textAlign="Right" 
                    format="C" width="100">
                    </e-column>
                    <e-column field="OrderDate" headerText="Order Date" textAlign="Right" 
                    format="yMd" width="100"></e-column>
                </e-columns>
            </ejs-grid>`,
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid')
    public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
  }
  public customizeRows(args: any) {
    ((this.grid as any).getRowByIndex(2) as any).style.background = 'rgb(193, 228, 234)';
  }
}
