import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';


@Component({
  imports: [

    SpreadsheetAllModule
  ],


  standalone: true,
  selector: 'app-container',
  template: `<ejs-spreadsheet #spreadsheet (created)="created()" [openUrl]="openUrl" allowOpen="true" [saveUrl]="saveUrl" allowSave="true" [enableNotes]="false">
  <e-sheets>
      <e-sheet name="Price Details">
          <e-ranges>
              <e-range [dataSource]="data"></e-range>
          </e-ranges>
          <e-columns>
          <e-column [width]=140></e-column>
              <e-column [width]=110></e-column>
              <e-column [width]=110></e-column>
              <e-column [width]=80></e-column>
          </e-columns>
      </e-sheet>
  </e-sheets>
</ejs-spreadsheet>`,
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj: SpreadsheetComponent | undefined;
  public data: object[] = dataSource;
  public openUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/open';
  public saveUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/save';
  created() {
    this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:H1');
  };
}
