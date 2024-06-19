import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule, SpreadsheetComponent, created } from '@syncfusion/ej2-angular-spreadsheet'
import { Component } from '@angular/core';
import { getDefaultData } from './datasource';

@Component({
  imports: [

    SpreadsheetAllModule
  ],
  standalone: true,
  selector: 'app-container',
  template: `<div class="control-section">
  <button className="e-btn custom-btn" (click)="readOnlyRow()">Make Row 2 readOnly</button>
  <button className="e-btn custom-btn" (click)="readOnlyCell()">Make E5 cell readOnly</button>
  <button className="e-btn custom-btn" (click)="removeReadOnly()">Remove readOnly</button>
  <button className="e-btn custom-btn" (click)="readOnlyCol()">Make Column A readOnly</button>
  <ejs-spreadsheet #spreadsheet [openUrl]="openUrl" [saveUrl]="saveUrl">
    <e-sheets>
      <e-sheet name="Car Sales Report">
        <e-ranges>
          <e-range [dataSource]="data"></e-range>
        </e-ranges>
        <e-rows>
          <e-row [index]="3" [isReadOnly]="true"></e-row>
          <e-row [index]="4">
            <e-cells>
              <e-cell [index]="5" [isReadOnly]="true"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
        <e-columns>
          <e-column [width]="180"></e-column>
          <e-column [width]="130"></e-column>
          <e-column [isReadOnly]="true" [width]="130"></e-column>
          <e-column [width]="180"></e-column>
          <e-column [width]="130"></e-column>
          <e-column [width]="120"></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</div>`
})
export class AppComponent {
  constructor() {

  }
  @ViewChild('spreadsheet')
  public spreadsheetObj!: SpreadsheetComponent;
  public data: Object[] = getDefaultData();
  public openUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/open';
  public saveUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/save';

  readOnlyRow(): void {
    this.spreadsheetObj.setRangeReadOnly(true, '2:2', this.spreadsheetObj.activeSheetIndex);
  }
  readOnlyCol(): void {
    this.spreadsheetObj.setRangeReadOnly(true, 'A:A', this.spreadsheetObj.activeSheetIndex);
  }
  readOnlyCell(): void {
    this.spreadsheetObj.setRangeReadOnly(true, 'E5:E5', this.spreadsheetObj.activeSheetIndex);
  }
  removeReadOnly(): void {
    this.spreadsheetObj.setRangeReadOnly(false, '2:2', this.spreadsheetObj.activeSheetIndex);
    this.spreadsheetObj.setRangeReadOnly(false, 'A:A', this.spreadsheetObj.activeSheetIndex);
    this.spreadsheetObj.setRangeReadOnly(false, 'E5:E5', this.spreadsheetObj.activeSheetIndex);
  }

}

