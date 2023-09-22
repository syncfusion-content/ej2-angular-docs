import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-grid [dataSource]="data" height="315px">
              <e-columns>
                <e-column
                  field="OrderID"
                  headerText="Order ID"
                  textAlign="Right"
                  width="120">
                </e-column>
                <e-column field="CustomerID" headerText="Customer ID" width="140">
                  <ng-template #headerTemplate let-data>
                    <div>
                      <span class="e-icon-userlogin e-icons employee"></span> Customer ID
                    </div>
                  </ng-template>
                </e-column>
                <e-column field="Freight" headerText="Freight" format="C" width="120">
                  <ng-template #headerTemplate let-data>
                    <div>
                      <ejs-dropdownlist index="0" width="130" [dataSource]="dropdownData">
                      </ejs-dropdownlist>
                    </div>
                  </ng-template>
                </e-column>
                <e-column field="OrderDate" textAlign="Right" format="yMd" width="140">
                  <ng-template #headerTemplate let-data>
                    <div>
                      <ejs-switch (change)="onSwitchToggle($event)"></ejs-switch>
                      <label style="padding: 0px 0px 0px 10px">{{ headerText }}</label>
                    </div>
                  </ng-template>
                </e-column>
              </e-columns>
           </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data: Object[] = [];
  public dropdownData: string[] = [];
  public headerText: string = 'Order Date';

  ngOnInit() {
    this.data = data;
    this.dropdownData = ['Freight', 'Shipment', 'Cargo'];
  }
  onSwitchToggle(args: any) {
    this.headerText = (args as any).checked ? 'Purchase Date' : 'Order Date';
  }

}
