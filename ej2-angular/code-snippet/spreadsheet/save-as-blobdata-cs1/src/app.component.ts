import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BeforeSaveEventArgs, SaveCompleteEventArgs, SpreadsheetAllModule, SpreadsheetComponent, created } from '@syncfusion/ej2-angular-spreadsheet'
import { Component } from '@angular/core';
import { getDefaultData } from './datasource';

@Component({
  imports: [

    SpreadsheetAllModule
  ],
  standalone: true,
  selector: 'app-container',
  template: `<div class="control-section">
  <ejs-spreadsheet #spreadsheet openUrl="https://services.syncfusion.com/angular/production/api/spreadsheet/open" saveUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/save' (beforeSave)="beforeSave($event)" (saveComplete)="saveComplete($event)">
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
    </ejs-spreadsheet>
</div>`
})
export class AppComponent {
  constructor() {

  }
  
  @ViewChild('spreadsheet')
  
  public spreadsheetObj!: SpreadsheetComponent;
  public data: Object[] = getDefaultData();

    beforeSave(args: BeforeSaveEventArgs): void {
        args.needBlobData = true; // To trigger the saveComplete event.
        args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
    };
    saveComplete(args: SaveCompleteEventArgs): void {
        // To obtain the Blob data.
        console.log("Spreadsheet BlobData: ", args.blobData)
    };
}

