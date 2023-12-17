
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data'>
    <e-columns>
     <e-column *ngFor="let column of columns" [field]="column.field" [headerText]="column.headerText"></e-column> 
    </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public columns?: object[] | any;

  ngOnInit(): void {
    this.data = data;
    this.columns = [
      { field: 'OrderID', headerText: 'Order ID' },
      { field: 'CustomerID', headerText: 'Customer ID' },
      { field: 'Freight', headerText: 'Freight' },
      { field: 'ShipCountry', headerText: 'ShipCountry' }
    ]
  }
}


