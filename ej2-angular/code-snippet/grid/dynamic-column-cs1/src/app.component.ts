
import { Component, NgIterable, OnInit } from '@angular/core';
import { data } from './datasource';
import { ColumnModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data'>
    <e-columns>
    <e-column *ngFor="let column of columns" [field]="column.field" [headerText]="column.headerText"></e-column> 
    </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public columns?: NgIterable<ColumnModel> | null | undefined;

  ngOnInit(): void {
    this.data = data;
    this.columns = [
      { field: 'OrderID', headerText: 'Order ID' },
      { field: 'CustomerID', headerText: 'Customer ID' },
      { field: 'Freight', headerText: 'Freight' },
      { field: 'ShipCountry', headerText: 'ShipCountry' }
    ];
  }
}