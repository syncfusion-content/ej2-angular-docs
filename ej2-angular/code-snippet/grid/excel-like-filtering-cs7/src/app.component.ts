import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { categoryData } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
  selector: 'app-root',
  template: `<div class="control-section">
    <ejs-grid #grid [dataSource]="data" allowPaging="true" allowFiltering="true" [pageSettings]="pageSettings" [filterSettings]="filterOptions" >
      <e-columns>
        <e-column field="CategoryName"  headerText="Category Name"  width="120" ></e-column>
        <e-column field="Delivered"  headerText="Delivered"  width="120"  displayAsCheckBox="true" [filter]="columnFilterSettings" > 
    <ng-template #filterItemTemplate let-data>{{data.Delivered == true ? "Delivered" : "Not delivered"}}</ng-template></e-column>
        <e-column field="ProductID" headerText="ProductID"  width="120" ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
  `,
})
export class AppComponent implements OnInit {
  public data?: object[];
  public pageSettings?: PageSettingsModel = { pageSize: 6 };
  public filterOptions: Object = { type: 'Excel' };
  public columnFilterSettings?: Object;
  public filterItemTemplate?: string;

  ngOnInit(): void {
    this.data = categoryData;
    this.columnFilterSettings = {
      type: 'CheckBox',
      filterItemTemplate: this.filterItemTemplate,
    };
  }
}
