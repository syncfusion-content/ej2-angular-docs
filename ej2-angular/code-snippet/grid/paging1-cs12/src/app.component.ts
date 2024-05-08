import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { orderDetails } from './datasource';
import { GridComponent, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
        
        GridModule,
        TextBoxModule,
        ButtonModule
    ],

providers: [PageService, ToolbarService, EditService],
standalone: true,
  selector: 'app-root',
  template: `
        <div>
          <label style="padding: 30px 17px 0 0">Enter current page:</label>
          <ejs-textbox #textbox width="120"></ejs-textbox>
          <button ejs-button #button id="button" (created)=clickHandler($event)>click button</button>
        </div>
        <div style="padding:20px 0 0 0">
          <ejs-grid #grid id="PagingGrid" [dataSource]="data" [allowPaging]="true" height="325">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
              </e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
              <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
              <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
            </e-columns>
          </ejs-grid>
        </div> `
})

export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid')
  public grid?: GridComponent;
  public pageOptions?: PageSettingsModel;
  @ViewChild('textbox') public textbox?: TextBoxComponent;
  @ViewChild('button') public button?: ButtonComponent;

  ngOnInit(): void {
    this.data = orderDetails;
  }
  clickHandler(args:any): void {
    (this.button as ButtonComponent).element.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault(); // Prevent any default behavior of the button click
      (this.grid as GridComponent).pageSettings.currentPage = parseInt((this.textbox as TextBoxComponent).value, 10);
    });
  }
}
