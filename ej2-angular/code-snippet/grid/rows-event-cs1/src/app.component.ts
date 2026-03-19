import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GridModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]="data" (dataBound)="customizeRows()">
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
  public customizeRows() {
    ((this.grid as GridComponent).getRowByIndex(2) as HTMLElement).style.background = 'rgb(193, 228, 234)';
  }
}
