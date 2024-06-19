import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule, SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet'
import { Component } from '@angular/core';
import { getDefaultData } from './datasource';

@Component({
  imports: [

    SpreadsheetAllModule
  ],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-spreadsheet #spreadsheet [openUrl]="openUrl" [saveUrl]="saveUrl">
    <e-sheets>
      <e-sheet name="Car Sales Report">
        <e-ranges>
          <e-range [dataSource]="data" [fieldsOrder]="fieldsOrder"></e-range>
        </e-ranges>
        <e-columns>
          <e-column [width]="180"></e-column>
          <e-column [width]="130"></e-column>
          <e-column [width]="130"></e-column>
          <e-column [width]="180"></e-column>
          <e-column [width]="130"></e-column>
          <e-column [width]="120"></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>`
})
export class AppComponent {
  constructor() {

  }
  @ViewChild('spreadsheet')
  public spreadsheetObj!: SpreadsheetComponent;
  public data: Object[] = getDefaultData();
  public openUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/open';
  public saveUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/save';
  
  public fieldsOrder: string[] = ['Customer Name', 'Payment Mode', 'Model', 'Color', 'Amount', 'Delivery Date'];

}

