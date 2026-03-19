import { data } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { EditService, FilterService, GridComponent, GridModule, PageService, SelectionSettingsModel, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ CommonModule,  GridModule,  ButtonModule ],
  providers: [EditService, ToolbarService, PageService, FilterService],
  standalone: true,
  selector: 'app-root',
  template: ` 
        <div style="padding: 5px 0px 5px 0px">
          <button ejs-button class="btn" (click)="click()">Get selected row indexes</button>
        </div>
        <p id="message" *ngIf="showMessage">Selected row indexes: {{ selectedRowIndexes }}</p>
        <ejs-grid #grid [dataSource]="data" height="280px" 
        [selectionSettings]="selectionOptions">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
            width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="150">
            </e-column>
            <e-column field="ShipCity" headerText="Ship City" width="150">
            </e-column>
            <e-column field="ShipName" headerText="Ship Name" width="150">
            </e-column>
          </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public selectedRowIndexes: number[] = [];
  public selectionOptions?: SelectionSettingsModel;
  public showMessage = false;

  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple' };
  }
  click() {
    this.selectedRowIndexes = (this.grid as GridComponent).getSelectedRowIndexes();
    this.showMessage = this.selectedRowIndexes.length > 0;
  }
}
