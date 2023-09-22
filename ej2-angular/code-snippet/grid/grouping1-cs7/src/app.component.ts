

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `
    <div style="display:flex">
    <input
      type="number"
      [(ngModel)]="groupedRowIndex"
      placeholder="Enter Grouped Row Index"
    />
    <button ejs-button (click)="onExpandCollapseButtonClick()">
      Collapse or Expand Row
    </button>
    </div>
    <div style="padding-top:5px">
      <p style="color:red; ">{{ message }}</p>
    </div>
  
  <ejs-grid #grid style="padding-top: 5px" [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupSettings' height='240px'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 [allowGrouping]='false'></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
      <e-column field='ShipCity' headerText='Ship City' width=100 [allowGrouping]='false'></e-column>
      <e-column field='ShipName' headerText='Ship Name' width=120 [allowGrouping]='false'></e-column>
    </e-columns>
  </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupSettings?: GroupSettingsModel;
    public groupedRowIndex?: number;
    public message?:string
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.groupSettings = { columns: ['CustomerID'] };
    }

   onExpandCollapseButtonClick() {
    const groupedRows = Array.from(
      (this.grid as any)
        .getContentTable()
        .querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse')
    );

    if (groupedRows.length >= 0 && (this.groupedRowIndex as any) < groupedRows.length) {
      this.message = '';
      const groupCaptionElement = groupedRows[this.groupedRowIndex as any];
      (this.grid as any).groupModule.expandCollapseRows(groupCaptionElement);
    } else {
      (this.message as any) =
        'The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.';
    }
  }
}
