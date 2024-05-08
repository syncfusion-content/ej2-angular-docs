import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FreezeService, SelectionService, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'


import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, freezeDirection } from '@syncfusion/ej2-angular-grids'
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        DropDownListAllModule
    ],

providers: [FreezeService, SelectionService, EditService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="display: flex">
    <label style="padding: 10px 10px 26px 0"> Change column: </label>
    <ejs-dropdownlist
      id="columnDropDown"
      #columnDropDown
      index="7"
      [dataSource]="columnData"
      [fields]="fields"
      width="100px"
    ></ejs-dropdownlist>
    <label style="padding: 10px 10px 26px 0; margin-left:5px">
      Change freeze direction:
    </label>
    <ejs-dropdownlist
      id="directionDropDown"
      #directionDropDown
      index="0"
      [dataSource]="directionData"
      [fields]="fields"
      width="80px"
    ></ejs-dropdownlist>
      <div>
        <button style="margin-left:5px" ejs-button (click)="freezeDirectionFn()">Update</button>
      </div>
    </div>
    <ejs-grid #grid id='grid' style="padding: 5px 5px" [dataSource]='data' height='315' [enableHover]='false'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' width='90' textAlign='Right'></e-column>
          <e-column field='Freight' headerText='Freight' width='90' format='C2' textAlign='Right' freeze='Fixed'></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width='100' freeze='Right'></e-column>
          <e-column field='OrderDate' headerText='Order Date' width='100' format="yMd" textAlign='Right'></e-column>
          <e-column field='ShipName' headerText='Ship Name' width='100'></e-column>
          <e-column field='ShipAddress' headerText='Ship Address' width='120'></e-column>
          <e-column field='ShipCity' headerText='Ship City' width='110'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width='100' freeze='Left'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    @ViewChild('columnDropDown')
    public columnDropDown?: DropDownListComponent;
    @ViewChild('directionDropDown')
    public directionDropDown?: DropDownListComponent;
    public fields: object = { text: 'name', value: 'id' };
    public columnData?: object[]
    public directionData?: object[];

    ngOnInit(): void {
      this.data = data;
      this.columnData=[
        { id: 'OrderID', name: 'Order ID' },
        { id: 'Freight', name: 'Freight' },
        { id: 'CustomerID', name: 'Customer ID' },
        { id: 'OrderDate', name: 'Order Date' },
        { id: 'ShipName', name: 'Ship Name' },
        { id: 'ShipAddress', name: 'Ship Address' },
        { id: 'ShipCity', name: 'Ship City' },
        { id: 'ShipCountry', name: 'Ship Country' },
      ];
      this.directionData= [
        { id: 'Left', name: 'Left' },
        { id: 'Right', name: 'Right' },
        { id: 'Fixed', name: 'Fixed' },
      ];
    }

    freezeDirectionFn() {
      (this.grid as GridComponent).getColumnByField((this.columnDropDown as DropDownListComponent).value as string).freeze=(this.directionDropDown as DropDownListComponent).value as freezeDirection
      (this.grid as GridComponent).refreshColumns();
    }
}



