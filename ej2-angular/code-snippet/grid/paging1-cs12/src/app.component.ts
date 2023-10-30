import { Component, OnInit, ViewChild } from '@angular/core';
import { orderDetails } from './datasource';
import { GridComponent, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  template: `
        <div>
          <label style="padding: 30px 17px 0 0">Enter current page:</label>
          <ejs-textbox #textbox width="120"></ejs-textbox>
          <button ejs-button id="button" (click)=click($event)>click button</button>
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

  ngOnInit(): void {
    this.data = orderDetails;
  }
  click(args: ClickEventArgs): void {
    (this.grid as GridComponent).pageSettings.currentPage = parseInt((this.textbox as TextBoxComponent), 10);
  }
}
