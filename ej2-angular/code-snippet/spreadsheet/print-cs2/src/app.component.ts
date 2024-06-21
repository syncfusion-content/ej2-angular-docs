import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule, PrintType } from '@syncfusion/ej2-angular-spreadsheet';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { dataSource1, dataSource2 } from './datasource';


@Component({
  imports: [
    DropDownButtonModule,
    SpreadsheetAllModule
  ],
  standalone: true,
  selector: 'app-container',
  template: `<div> <div id="print"> <button ejs-dropdownbutton [items]='items' content='Print' (select)='itemSelect($event)'></button>
  <input type="checkbox" id="gridline"><label for="gridline">Allow Grid Lines</label>
  <input type="checkbox" id="header"><label for="header">Allow Row Column Header</label>
</div>
<ejs-spreadsheet #spreadsheet (created)="created()" [openUrl]="openUrl" allowOpen="true" [saveUrl]="saveUrl" allowSave="true">
      <e-sheets>
        <e-sheet name="Budget">
          <e-ranges>
            <e-range [dataSource]="budgetData"></e-range>
          </e-ranges>
          <e-columns>
            <e-column [width]=100></e-column>
            <e-column [width]=100></e-column>
            <e-column [width]=100></e-column>
            <e-column [width]=100></e-column>
          </e-columns>
        </e-sheet>
        <e-sheet name="Salary">
          <e-ranges>
            <e-range [dataSource]="salaryData"></e-range>
          </e-ranges>
          <e-columns>
            <e-column [width]=100></e-column>
            <e-column [width]=100></e-column>
            <e-column [width]=100></e-column>
            <e-column [width]=100></e-column>
            </e-columns>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet></div>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  spreadsheetObj: SpreadsheetComponent | undefined;
  public budgetData: object[] = dataSource1;
  public salaryData: object[] = dataSource2;
  public openUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/open';
  public saveUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/save';
  public items: ItemModel[] = [{ text: 'ActiveSheet' }, { text: 'Workbook' }];
  created() {
    this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
    this.spreadsheetObj!.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
  }
  public itemSelect(args: MenuEventArgs) {
    if (this.spreadsheetObj) {
      const allowGridLines: HTMLInputElement = document.getElementById('gridline') as HTMLInputElement;
      const allowRowColumnHeader: HTMLInputElement = document.getElementById('header') as HTMLInputElement;
      this.spreadsheetObj!.print({
        type: args.item.text as PrintType,
        allowGridLines: allowGridLines.checked,
        allowRowColumnHeader: allowRowColumnHeader.checked
      });
    }
  }
}
