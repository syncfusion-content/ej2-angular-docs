import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'

import { Component, OnInit, ViewChild } from '@angular/core';
import { orderDetails } from './datasource';
import { ChangeEventArgs, NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        NumericTextBoxModule
    ],

providers: [PageService, ToolbarService, EditService],
standalone: true,
  selector: 'app-root',
  template: `
        <div style="padding:0 0 20px 0">
            <label style="padding: 30px 17px 0 0">Select page size:</label>
            <ejs-numerictextbox #numericTextbox placeholder='select container height' 
            format='###.##' min=150  step="50" (change)='calculatePageSize($event)' 
            width="200px"></ejs-numerictextbox>
        </div>
        <ejs-grid #grid [dataSource]="data" [allowPaging]="true" >
        <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90">
            </e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
            <e-column field="Freight" headerText="Freight" textAlign='Right' format='C2' 
            width="90"></e-column>
            <e-column field="OrderDate" headerText="Order Date" textAlign='Right' 
            format='yMd' width="120"></e-column>
        </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid') grid?: GridComponent;
  @ViewChild('numericTextbox') public numerictextbox?: NumericTextBoxComponent;

  ngOnInit(): void {
    this.data = orderDetails;
  }
  calculatePageSize({ value }: ChangeEventArgs) {
    (this.grid as GridComponent).pageSettings.pageSize = (this.grid as GridComponent).calculatePageSizeByParentHeight((value as number).toString());
    
}
}
