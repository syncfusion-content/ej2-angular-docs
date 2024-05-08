import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
  GridComponent,
  SelectionSettingsModel,
  PageSettingsModel,
} from '@syncfusion/ej2-angular-grids';

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
        <div style="padding: 10px 0px 20px 0px">
          <button ejs-button class="btn" (click)="selectRows([1, 3])">
          select [1, 3] </button>
          <button ejs-button class="btn" (click)="selectRows([0, 2])">
          select [0, 2]</button>
          <button ejs-button class="btn" (click)="selectRows([2, 4])">
          select [2, 4] </button>
          <button ejs-button class="btn" (click)="selectRows([0,5])">
          select [0,5]</button>
          <button ejs-button class="btn" (click)="selectRows([1,6])">
          select [1,6]</button>
        </div>
        <div style="padding: 10px 0px 20px 0px">
          <button ejs-button class="btn" (click)="selectRows([0,7,8])">
          select [0,7,8]</button>
          <button ejs-button class="btn" (click)="selectRows([1,9,10])">
          select [1,9,10]</button>
          <button ejs-button class="btn" (click)="selectRows([4,7,12])">
          select [4,7,12]</button>
          <button ejs-button class="btn" (click)="selectRows([2,5,6])">
          select [2,5,6]</button>
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
  public pageOptions?: PageSettingsModel;
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple', mode: 'Row' };
    this.pageOptions = { pageSize: 5 };
  }
  selectRows(rowIndexes: number[]): void {
    this.grid?.clearRowSelection();
    this.grid?.selectRows(rowIndexes);
  }
}
