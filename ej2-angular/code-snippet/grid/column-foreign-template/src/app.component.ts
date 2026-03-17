import { customerData, orderDetails } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ForeignKeyService, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  standalone: true,
  imports: [CommonModule, GridModule],
  providers: [ForeignKeyService],
  selector: 'app-root',
  template: `    
    <ejs-grid #grid id="Grid" [dataSource]="data" height="320px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150" foreignKeyField="CustomerID" foreignKeyValue="ContactName" [dataSource]="customerData">
          <ng-template #template let-data let-foreignKeyData>
            <a href="javascript:void(0)" (click)="navToAccount(data.OrderID, $event)">{{ data.foreignKeyData.ContactName }}</a>
          </ng-template>
        </e-column>
        <e-column field="Freight" headerText="Freight" width="100" textAlign="Right" format="C2"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="170"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {
  public data?: object[];
  public customerData?: object[];

  public ngOnInit(): void {
    this.data = orderDetails;
    this.customerData=customerData;
  }
  
  public navToAccount(Id: string, e: Event): void {
    window.history.pushState('', 'changed', `../Account/AccountDetail.cshtml?custid=0&accountId=${Id}`);
  }
}
