import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { EditService, FilterService, GridModule, PageService, ToolbarService, GridComponent,SelectionSettingsModel,PageSettingsModel, } from '@syncfusion/ej2-angular-grids';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [ GridModule, TextBoxModule, ButtonModule ],
  providers: [EditService, ToolbarService, PageService, FilterService],
  standalone: true,
  selector: 'app-root',
  template: `
        <div>
          <label style="padding: 30px 17px 0 0">Enter the start row index: </label>
          <ejs-textbox #textbox required  width="120"></ejs-textbox>
        </div>
        <div>
          <label style="padding: 30px 17px 0 0">Enter the end row index: </label>
          <ejs-textbox #textbox1 required width="120"></ejs-textbox>
        </div>
        <div style="padding: 10px 0 0px 180px">
        <button ejs-button id="button" (click)="click()">Select rows</button>
        </div>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid #grid [dataSource]="data" [selectionSettings]="selectionOptions">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
              width="120"></e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
              <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
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
  public startIndex?:number;
  public endIndex?:number;
  @ViewChild('textbox') public textbox?: TextBoxComponent;
  @ViewChild('textbox1') public textbox1?: TextBoxComponent;
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { mode: 'Row', type: 'Multiple' };
    this.pageOptions = { pageSize: 5 };
  }
  click(): void {
    this.startIndex = parseInt((this.textbox as TextBoxComponent).element.value, 10); 
    this.endIndex = parseInt((this.textbox1 as TextBoxComponent).element.value, 10); 
    (this.grid as GridComponent).selectionModule.clearRowSelection();
    if (!isNaN(this.startIndex) && !isNaN(this.endIndex)) {
      (this.grid as GridComponent).selectionModule.selectRowsByRange(this.startIndex, this.endIndex);
    }
  }
}