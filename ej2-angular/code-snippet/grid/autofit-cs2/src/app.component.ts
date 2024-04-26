import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ResizeService, ToolbarService, ColumnChooserService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ActionEventArgs, GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ResizeService, ToolbarService, ColumnChooserService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]="data" height="350px" [allowPaging]="true"
  [toolbar]="toolbarItems" (actionComplete)="onActionComplete($event)" [showColumnChooser]= 'true'>
  <e-columns>
  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
  <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
  <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
  <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
  <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
  </e-columns>
</ejs-grid>
`,
})
export class AppComponent implements OnInit {
  public data?: object[];
  @ViewChild('grid')
  public grid?: GridComponent;
  public toolbarItems?: ToolbarItems[];
  ngOnInit(): void {
    this.data = data;
    this.toolbarItems = ['ColumnChooser'];
  }

  public onActionComplete({ requestType }: ActionEventArgs): void {
    if (requestType === 'columnstate') {
      (this.grid as GridComponent).autoFitColumns();
    }
  }
}
