import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
  selector: 'app-root',
  template: `<button ejs-button cssClass="e-primary" (click)="onClick()">Clear filter</button><ejs-grid #grid [dataSource]='data' [allowPaging]='true' [allowSorting]='true'
                [allowFiltering]='true' [pageSettings]='pageSettings'>
                 <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=120></e-column>
                 </e-columns>
              </ejs-grid>`,
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: object[];
  public pageSettings?: PageSettingsModel;

  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageSize: 6 };
  }
  public onClick(): void {
    this.grid?.clearFiltering(); //clear filtering for all columns
  }
}