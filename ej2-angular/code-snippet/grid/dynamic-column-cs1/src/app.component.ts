import { data } from './datasource';
import { Component, NgIterable, OnInit } from '@angular/core';
import { ColumnModel, FilterService, GridModule, GroupService, PageService, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule ],
  providers: [PageService,SortService, FilterService, GroupService],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data' height='330'>
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