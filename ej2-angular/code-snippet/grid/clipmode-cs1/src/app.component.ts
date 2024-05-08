import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { inventoryData } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, ClipMode } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,DropDownListAllModule
    ],

providers: [PageService],
standalone: true,
  selector: 'app-root',
  template: `
    <div style="display: flex">
    <label style="padding: 10px 10px 26px 0"> Change the clip mode: </label>
    <ejs-dropdownlist
    style="margin-top:5px"
    index="0"
    width="150"
    [fields]='fields'
    [dataSource]="ddlData"
    (change)="valueChange($event)"></ejs-dropdownlist>
    </div>
    <ejs-grid #grid style="padding: 5px 5px" [dataSource]='data' allowPaging='true'>
        <e-columns>
          <e-column field='MainFieldsofInvention' headerText='Invention' width='130'></e-column>
          <e-column field='Inventor' headerText='Inventor'  width='80'></e-column>
          <e-column field='NumberofPatentFamilies' headerText='Count'  width='100'></e-column>
          <e-column field='Country' headerText='Country' width='80'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid')
  public grid?: GridComponent;
  public fields: object = { text: 'text', value: 'value' };
  public ddlData: object[] = [
    { text: 'Ellipsis', value: 'Ellipsis' },
    { text: 'Clip', value: 'Clip' },
    { text: 'Ellipsis with Tooltip', value: 'EllipsisWithTooltip' },
  ];
  ngOnInit(): void {
    this.data = inventoryData;
  }
  valueChange(args: ChangeEventArgs): void {
    (this.grid as GridComponent).getColumnByField('MainFieldsofInvention').clipMode = (args.value as ClipMode);
    (this.grid as GridComponent).refresh();
  }
}



