import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GridModule],
  providers: [PageService],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]="data" allowPaging="true">
                <e-columns>
                  <e-column field="OrderID" headerText="Order ID" 
                  [customAttributes]="{class:'custom'}" textAlign="Center">
                  </e-column>
                  <e-column field="CustomerName" headerText="Customer Name" textAlign="Center">
                  </e-column>
                  <e-column field="OrderDate" headerText="Order Date" format="yMd"
                  [customAttributes]="{class:'custom'}" textAlign="Center">
                  </e-column>
                  <e-column field="ShippedDate" headerText="Shipped Date" textAlign="Center" format="yMd">
                  </e-column>
                </e-columns>
              </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];

  ngOnInit() {
    this.data = data;
  }
}