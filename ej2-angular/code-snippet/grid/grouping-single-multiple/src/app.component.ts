import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import {
  GridComponent,
  GridModule,
  GroupService,
  GroupSettingsModel,
} from '@syncfusion/ej2-angular-grids';
@Component({
  imports: [ButtonModule, GridModule],
  providers: [GroupService],
  standalone: true,
  selector: 'app-root',
  template: `<button ejs-button (click)="toggleGrouping()">
  {{ isMultipleGrouping ? 'Multiple Group' : 'Single Group' }}
  </button>
<ejs-grid
  #grid
  [dataSource]="data"
  [allowGrouping]="true"
  [groupSettings]="groupOptions"
  height="340px"
>
  <e-columns>
    <e-column
      field="OrderID"
      headerText="Order ID"
      textAlign="Right"
      width="90"
    ></e-column>
    <e-column
      field="CustomerID"
      headerText="Customer ID"
      width="100"
    ></e-column>
    <e-column field="ShipCity" headerText="Ship City" width="100"></e-column>
    <e-column field="ShipName" headerText="Ship Name" width="120"></e-column>
  </e-columns>
  <ng-template #groupSettingsCaptionTemplate let-data>
    <span class="groupItems">
      {{ data.headerText }} - {{ data.key }} : {{ data.count }} Items
    </span>
  </ng-template> </ejs-grid
>`,
})
export class AppComponent implements OnInit {
  @ViewChild('grid')
  public grid!: GridComponent;
  public data?: object[];
  public groupOptions?: GroupSettingsModel;
  ngOnInit(): void {
    this.data = data;
  }
  public isMultipleGrouping: boolean = false;

  public toggleGrouping(): void {
    this.grid.clearGrouping();

    const columns = this.isMultipleGrouping
      ? ['CustomerID']
      : ['CustomerID', 'ShipCity'];

    columns.forEach((column: string) => this.grid.groupColumn(column));

    this.isMultipleGrouping = !this.isMultipleGrouping;
  }
}
