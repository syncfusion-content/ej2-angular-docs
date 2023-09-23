import { Component, OnInit } from '@angular/core';
import { orderDetails } from './datasource';
import { ColumnModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `<div>
              <ejs-grid [dataSource]="data" allowPaging="true">
                <e-columns>
                  <e-column field="OrderID" width="120" textAlign="Center">
                    <ng-template #headerTemplate let-data>
                      <div>
                        <a href="#">OrderID</a>
                      </div>
                    </ng-template>
                  </e-column>
                  <e-column headerText="Order Details" [columns]="orderColumns">
                    <ng-template #headerTemplate let-data>
                      <div>
                        <ejs-dropdownlist index="0" 
                        [dataSource]="dropdownData">
                        </ejs-dropdownlist>
                      </div>
                    </ng-template>
                  </e-column>
                  <e-column headerText="Ship Details" [columns]="shipColumns">
                    <ng-template #headerTemplate let-column>
                      <div>
                        <span>{{ column.headerText }}</span>
                        <span>(<i class="fa fa-truck"></i>)</span>
                      </div>
                    </ng-template>
                  </e-column>
                </e-columns>
              </ejs-grid>
            </div>`
})
export class AppComponent implements OnInit {

  public data?: Object[] = [];
  public orderColumns?: ColumnModel[];
  public shipColumns?: ColumnModel[];
  public dropdownData?: string[];

  public ngOnInit(): void {

    this.data = orderDetails;
    this.orderColumns = [
      {
        field: 'OrderDate',
        headerText: 'Order Date',
        format: 'yMd',
        width: 130,
        textAlign: 'Right',
        minWidth: 10,
      },
      {
        field: 'Freight',
        headerText: 'Freight ($)',
        width: 120,
        format: 'C1',
        textAlign: 'Right',
        minWidth: 10,
      },
    ];

    this.shipColumns = [
      {
        field: 'ShippedDate',
        headerText: 'Shipped Date',
        format: 'yMd',
        textAlign: 'Right',
        width: 150,
        minWidth: 10,
      },
      {
        field: 'ShipCountry',
        headerText: 'Ship Country',
        width: 150,
        minWidth: 10,
      },
    ];

    this.dropdownData = ['Order Details', 'Order Information'];
  }

}
