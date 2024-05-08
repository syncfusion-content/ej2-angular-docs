import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        TextBoxModule,
        ButtonModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
        <div style="padding: 0px 0px 20px 0px">
          <button ejs-button class="btn" (click)="buttonClick(1, 3)">
          Select [1, 3]</button>
          <button ejs-button class="btn" (click)="buttonClick(2, 2)">
          Select [2, 2]</button>
          <button ejs-button class="btn" (click)="buttonClick(0, 0)">
          Select [0, 0]</button>
        </div>
        <div style="padding: 0px 0px 20px 0px">
          <button ejs-button class="btn" (click)="buttonClick(4, 2)">
          Select [4, 2]</button>
          <button ejs-button class="btn" (click)="buttonClick(5, 1)">
          Select [5, 1]</button>
          <button ejs-button class="btn" (click)="buttonClick(3, 3)">
          Select [3, 3]</button>
        </div>
        <div style="padding: 0px 0px 20px 0px">
          <button ejs-button class="btn" (click)="buttonClick(0, 3)">
          Select [0, 3]</button>
          <button ejs-button class="btn" (click)="buttonClick(8, 1)">
          Select [8, 1]</button>
          <button ejs-button class="btn" (click)="buttonClick(8, 2)">
          Select [8, 2]</button>
        </div>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid #grid [dataSource]="data" [selectionSettings]="selectionOptions">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
              width="120"></e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="120">
              </e-column>
              <e-column field="ShipCountry" headerText="Ship Country" width="130">
              </e-column>
              <e-column field="Freight" headerText="Freight" format="C2" width="100">
              </e-column>
            </e-columns>
          </ejs-grid>
        </div>`
})

export class AppComponent implements OnInit {

  public data?: Object[];
  public selectionOptions?: SelectionSettingsModel;
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple', mode: 'Cell' };
  }

  buttonClick(rowIndex: number, columnIndex: number): void {
    this.grid?.selectCells([{ rowIndex: rowIndex, cellIndexes: [columnIndex] }]);
  }
}
