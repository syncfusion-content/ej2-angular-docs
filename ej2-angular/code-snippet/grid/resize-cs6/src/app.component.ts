import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ResizeService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,DropDownListAllModule,TextBoxModule,ButtonModule
    ],

providers: [ResizeService],
standalone: true,
  selector: 'app-root',
  template: `
    <div style="display:flex;">
      <label style="padding: 10px 10px 26px 0">Change the field: </label>
      <ejs-dropdownlist
        style="margin-top:5px"
        id="value"
        #dropdown
        index="0"
        width="120"
        [fields]="field"
        [dataSource]="ddlData"
      ></ejs-dropdownlist>
    </div>
    <div>
      <label style="padding: 30px 17px 0 0">Enter the width: </label>
      <ejs-textbox #textbox required placeholder="Enter new width" width="120"></ejs-textbox>
      <button ejs-button id="button" cssClass="e-outline" (click)="onExternalResize()">Resize</button>
      </div>      
    <ejs-grid #grid style="padding: 10px 10px" [dataSource]='data' [allowResizing]='true' height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' width=80></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>          
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public field: object = { text: 'text', value: 'value' };
  @ViewChild('grid')
  public grid?: GridComponent;
  @ViewChild('dropdown')
  public dropDown?: DropDownListComponent;
  @ViewChild('textbox')
  public textbox?: any;
  ngOnInit(): void {
    this.data = data;
  }
  public ddlData: object[] = [
    { text: 'OrderID', value: 'OrderID' },
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'ShipCountry', value: 'ShipCountry' },
  ];
  onExternalResize() {
    (this.grid as GridComponent).getColumnByField((this.dropDown as DropDownListComponent).value as string).width = this.textbox.element.value;
    (this.grid as GridComponent).refreshColumns();
  }
}



