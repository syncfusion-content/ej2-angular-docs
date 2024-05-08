import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {GridModule, PageService, EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DialogModule } from '@syncfusion/ej2-angular-popups'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        DialogModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
    <div style="padding: 20px 0px">
      <button ejs-button class="sample" (click)="showSelectedRecords()">Show Selected Records</button>
    </div>
    <ejs-grid #grid [dataSource]="data" allowPaging="true" [selectionSettings]="selectionOptions" 
    [pageSettings]="pageOptions">
      <e-columns>
        <e-column type="checkbox" width="50"></e-column>
        <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" textAlign="Right" 
        width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
        <e-column field="Freight" headerText="Freight" format="C2" width="100"></e-column>
      </e-columns>
    </ejs-grid>
    <ejs-dialog #dialogComponent [header]="'Selected Records'" [content]="dialogContent"
      [visible]="dialogVisible" (close)="dialogClose()" showCloseIcon="true" width="400px" 
      [position]='{ X: 300, Y: 100 }'>
      <ng-template #dialogContent>
        <ng-container>
          <div *ngFor="let record of selectedRecords">
            <p><b>Order ID:</b> {{ record.OrderID }}</p>
          </div>
        </ng-container>
      </ng-template>
    </ejs-dialog>
  `
})
export class AppComponent implements OnInit {

  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;
  public pageOptions?: PageSettingsModel;
  public dialogVisible: boolean = false;
  public selectedRecords: Order[] = [];
  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple', persistSelection: true };
    this.pageOptions = { pageSize: 5 };
  }

  showSelectedRecords(): void {
    this.selectedRecords = (this.grid as GridComponent).getSelectedRecords();
    if (this.selectedRecords.length > 0) {
      this.dialogVisible = true;
    }
  }
  dialogClose(): void {
    this.dialogVisible = false;
  }
}
interface Order {
  OrderID?: number;
  CustomerID?: string;
  ShipCountry?: string;
  Freight?: number;
}