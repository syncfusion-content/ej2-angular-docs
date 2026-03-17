import { data } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridModule, CommonModule, ButtonModule],
  providers: [PageService],
  template: `
    <div>
      <button ejs-button cssClass="e-primary" (click)="toggleGrid()" style="margin:5px">
        {{ data.length > 0 ? 'Hide Grid' : 'Show Grid with Data' }}
      </button>
    </div>

    <div *ngIf="data.length > 0; else noData">
      <ejs-grid [dataSource]="data" allowPaging="true" height='250'>
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
          <e-column field="OrderDate" headerText="Order Date" textAlign="Right" format="yMd" width="120"></e-column>
        </e-columns>
      </ejs-grid>
    </div>

    <ng-template #noData>
      <div class="no-data-msg" style="color:red; text-align: center">
        <p>No records available</p>
        <p>Please check your data source or try again later.</p>
      </div>
    </ng-template>
  `,
})
export class AppComponent implements OnInit {
  public data: object[] = [];

  ngOnInit(): void {
    this.data = data;
  }

  toggleGrid(): void {
    this.data = this.data.length > 0 ? [] : data;
  }
}