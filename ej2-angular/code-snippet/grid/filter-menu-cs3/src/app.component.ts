import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule
    ],

providers: [FilterService, PageService,CheckBoxSelectionService],
standalone: true,
  selector: 'app-root',
  template: `<div class="control-section">
  <ejs-grid
    #grid
    [dataSource]="data"
    allowSorting="true"
    allowPaging="true"
    allowFiltering="true"
    [pageSettings]="pageSettings"
    [filterSettings]="filterSettings"
    (actionComplete)="actionComplete($event)"
  >
  <e-columns>
      <e-column
        field="OrderID"
        headerText="Order ID"
        width="120"
        textAlign="Right"
      ></e-column>
      <e-column
        field="OrderDate"
        headerText="Order Date"
        width="180"
        type="datetime"
        [format]="formatoptions"
        textAlign="Right"
      ></e-column>
      <e-column
        field="ShippedDate"
        headerText="Shipped Date"
        width="180"
        type="datetime"
        [format]="formatoptions"
        textAlign="Right"
      ></e-column>
      <e-column
        field="ShipCountry"
        headerText="Ship Country"
        width="150"
      ></e-column>
   </e-columns>
  </ejs-grid>
</div>
  `,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public pageSettings?: Object;
  public filterSettings?: Object;
  public formatoptions?: Object;

  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageCount: 5 };
    this.filterSettings = { type: 'Menu' };
    this.formatoptions = { type: 'dateTime', format: 'M/d/y HH:mm' };
  }
  public actionComplete(args: { requestType: string; columnName: string }): void {
    if (args.requestType === 'filterafteropen') {
      var columnObj = this.grid?.getColumnByField(args.columnName);
      if (columnObj.type === 'datetime') {
        var dateObj = (document.getElementById('dateui-' + columnObj.uid) as any)['ej2_instances'][0];
        dateObj.timeFormat = 'HH:mm';
      }
    }
  }
}
