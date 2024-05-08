import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, ViewChild } from '@angular/core';
import { Column, GridComponent, TextAlign } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule
    ],

providers: [PageService],
standalone: true,
  selector: 'app-root',
  template: `<div style="display: flex">
              <label style="padding: 30px 17px 0 0;">Align the text of header text :</label>
              <ejs-dropdownlist  style="padding: 26px 0 0 0" index="0" width="100" 
              [dataSource]="alignmentData" (change)="changeAlignment($event)">
              </ejs-dropdownlist>
            </div>
            <div class="control-section" style="padding-top:20px">
              <ejs-grid #grid [dataSource]='data' height='315px' >
                <e-columns>
                  <e-column field='OrderID' headerText='Order ID' width=120 >
                  </e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=140 >
                  </e-column>
                  <e-column field='Freight' headerText='Freight'  format='C' width=120 >
                  </e-column>
                  <e-column field='OrderDate' headerText='Order Date' format='yMd' width=140>
                  </e-column>
                  </e-columns>
                </ejs-grid>
            </div>`
})
export class AppComponent {

  public data?: Object[] = data;
  @ViewChild('grid')
  public grid?: GridComponent;
  public alignmentData: Object[] = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' }
  ];

  public changeAlignment(args: ChangeEventArgs): void {
    (this.grid as GridComponent).columns.forEach((col) => {
      (col as Column).headerTextAlign = (args.value as TextAlign);
    });
    (this.grid as GridComponent).refreshHeader();
  }

}
