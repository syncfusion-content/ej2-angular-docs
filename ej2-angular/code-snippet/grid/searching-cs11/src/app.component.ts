import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SearchService, ToolbarService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, OnInit,ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems,SearchSettingsModel } from '@syncfusion/ej2-angular-grids'; 
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule
    ],

providers: [SearchService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="display: flex">
    <label style="padding:  10px 10px 26px 0">
      Change the search operators:
    </label>
    <ejs-dropdownlist
      style="margin-top:5px"
      id="value"
      #dropdown
      index="0"
      width="100"
      [dataSource]="ddlData"
      [fields]='fields'
      (change)="valueChange($event)"
    ></ejs-dropdownlist>
  </div>
  <ejs-grid #grid style="padding: 5px 5px" [dataSource]='data' [toolbar]='toolbarOptions' [searchSettings]="searchSettings" height='272px'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
      <e-column field='ShipName' headerText='Ship Name' width=110></e-column>
      <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>
    </e-columns>
  </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public searchSettings?: SearchSettingsModel
    @ViewChild('grid') public grid?: GridComponent;
    public fields?: object = { text: 'text', value: 'value' };
    public ddlData?: object[] = [
      { text: 'startswith', value: 'startswith' },
      { text: 'endswith', value: 'endswith' },
      { text: 'wildcard', value: 'wildcard' },
      { text: 'like', value: 'like' },
      { text: 'equal', value: 'equal' },
      { text: 'not equal', value: 'notequal' },
    ];

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Search'];
        this.searchSettings = { operator: 'contains' };
    }
    valueChange(args: ChangeEventArgs): void {
      (this.grid as GridComponent).searchSettings.operator = args.value as string; 
    }
 }



