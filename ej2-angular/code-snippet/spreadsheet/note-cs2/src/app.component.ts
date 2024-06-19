import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'

import { Component } from '@angular/core';
import { dataSource } from './datasource';


@Component({
  imports: [

    SpreadsheetAllModule
  ],


  standalone: true,
  selector: 'app-container',
  template: `<ejs-spreadsheet #default [openUrl]="openUrl" allowOpen="true" [saveUrl]="saveUrl" allowSave="true" [enableNotes]="false">
  <e-sheets>
      <e-sheet name="Car Sales Report">
          <e-ranges>
              <e-range [dataSource]="data"></e-range>
          </e-ranges>
          <e-columns>
              <e-column [width]=180></e-column>
              <e-column [width]=130></e-column>
              <e-column [width]=130></e-column>
              <e-column [width]=180></e-column>
              <e-column [width]=130></e-column>
              <e-column [width]=120></e-column>
          </e-columns>
      </e-sheet>
  </e-sheets>
</ejs-spreadsheet>`,
})
export class AppComponent {
  public data: object[] = dataSource;
  public openUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/open';
  public saveUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/save';
}
