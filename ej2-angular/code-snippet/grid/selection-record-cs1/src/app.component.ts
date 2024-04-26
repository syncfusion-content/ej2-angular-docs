import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
    <div style="padding: 20px 0px">
      <button ejs-button class="sample" (click)="click()">Selected Records count</button>
    </div>
    <p id="message" *ngIf="showMessage">Selected record count: {{ selectedRecordscount }}</p>
    <div class="control-section">
      <ejs-grid #grid [dataSource]="data" allowPaging="true" [allowSelection]="true" 
      [selectionSettings]="selectionOptions">
        <e-columns>
          <e-column field="OrderID" isPrimaryKey="true" headerText="Order ID" width="120" 
          textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
          <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" 
          textAlign="Right"></e-column>
          <e-column field="Freight" headerText="Freight" width="120" format="C2" 
          textAlign="Right"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130" format="yMd" 
          textAlign="Right"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  `,
})
export class AppComponent implements OnInit {

  @ViewChild('grid') public grid?: GridComponent;
  public data?: Object[];
  public selectionOptions?: SelectionSettingsModel;
  public showMessage = false;
  public selectedRecordscount: number = 0;

  public ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple' };
  }
  click(): void {
    this.selectedRecordscount = (this.grid as GridComponent).getSelectedRecords().length;
    this.showMessage = this.selectedRecordscount > 0;
  }
}
