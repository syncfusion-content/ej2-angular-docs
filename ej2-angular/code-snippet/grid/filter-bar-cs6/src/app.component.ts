import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, Column } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `
  <ejs-grid #grid [dataSource]="data" allowFiltering="true" height="350" (load)="load()" allowPaging="true">
  <e-columns>
      <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
      <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
      <e-column headerText="Action" width="150">
          <ng-template #template let-data>
              <button ejs-button >Custom action</button>
          </ng-template>
      </e-column>
  </e-columns>`,
})
export class AppComponent implements OnInit {
  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: object[];
  public pageSettings: Object = { pageCount: 5 };

  ngOnInit(): void {
    this.data = data;
  }
  load() {
    // Set filterTemplate to an empty span to hide the filter bar for the template column
    ((this.grid as GridComponent).columns[2] as Column).filterTemplate = '<span></span>';
  }
}
