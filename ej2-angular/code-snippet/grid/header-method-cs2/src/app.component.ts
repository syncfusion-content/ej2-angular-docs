import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule,PageService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { TooltipModule } from '@syncfusion/ej2-angular-popups'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { orderDetails } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
@Component({
imports: [
        
        GridModule,
        ButtonModule,
        TooltipModule,
        DropDownListAllModule
    ],

providers: [PageService],
standalone: true,
  selector: 'app-root',
  template: `<div class="control-section">
              <ejs-grid #grid [dataSource]="data" allowPaging="true" 
              (dataBound)="dataBound()" height="320">
                <e-columns>
                  <e-column field="OrderID" headerText="Order ID" width="120" 
                  textAlign="Right"></e-column>
                  <e-column field="CustomerName" headerText="Customer Name" width="150">
                  </e-column>
                  <e-column field="Freight" headerText="Freight" width="120" format="C2" 
                  textAlign="Right"></e-column>
                  <e-column field="ShipCountry" headerText="Ship Country" width="150">
                  </e-column>
                </e-columns>
              </ejs-grid>
            </div>`
})
export class AppComponent implements OnInit {

  public data?: Object[];
  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit() {
    this.data = orderDetails;
  }
  dataBound() {
    ((this.grid as GridComponent).getColumnHeaderByIndex(0) as HTMLElement).style.color = 'green';
    ((this.grid as GridComponent).getColumnHeaderByField('CustomerName') as HTMLElement).style.background = 'rgb(217, 244, 235)';
    ((this.grid as GridComponent).getColumnHeaderByField('OrderID') as HTMLElement).style.background = 'rgb(217, 244, 235)';
    ((this.grid as GridComponent).getColumnHeaderByField('ShipCountry') as HTMLElement).style.background = 'rgb(217, 244, 235)';
    ((this.grid as GridComponent).getColumnHeaderByField('CustomerName') as HTMLElement).style.color = '#0d0b0b';
    ((this.grid as GridComponent).getColumnHeaderByUid('grid-column2') as HTMLElement).style.background = 'rgb(217, 244, 235)';
    const columnIndex = (this.grid as GridComponent).getColumnIndexByField('ShipCountry');
    ((this.grid as GridComponent).getColumnHeaderByIndex(columnIndex) as HTMLElement).style.color = 'green';
    const index = (this.grid as GridComponent).getColumnIndexByUid('grid-column2');
    ((this.grid as GridComponent).getColumnHeaderByIndex(index) as HTMLElement).style.color = 'green';
  }

}
