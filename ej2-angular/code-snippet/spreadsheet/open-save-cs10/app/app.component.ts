import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'

import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuSelectEventArgs, SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { createElement } from '@syncfusion/ej2-base';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { WorkbookModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource';

@Component({
imports: [
        
        DropDownButtonModule,
        UploaderModule,
        SpreadsheetAllModule
    ],


standalone: true,
  selector: 'app-container',
  template:
    "<ejs-spreadsheet #spreadsheet (fileMenuItemSelect)='onFileItemSelect($event)' saveUrl='https://services.syncfusion.com/angular/production/api/spreadsheet/save' allowSave='true'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='data'></e-range></e-ranges><e-columns><e-column [width]=90></e-column><e-column [width]=100></e-column><e-column [width]=96></e-column><e-column [width]=120></e-column><e-column [width]=130></e-column><e-column [width]=120></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>",
})
export class AppComponent implements OnInit {
  public data: object[] | undefined;
  @ViewChild('spreadsheet') public spreadsheetObj!: SpreadsheetComponent;
  ngOnInit(): void {
    this.data = data;
  }
  onFileItemSelect(args: MenuSelectEventArgs) {
    if (args.item.text === 'Microsoft Excel') {
      args.cancel = true;
      this.spreadsheetObj
        .saveAsJson()
        .then((response: any) => {
          let formData: FormData = new FormData();
          formData.append(
            'JSONData',
            JSON.stringify(response.jsonObject.Workbook)
          );
          formData.append('fileName', 'Sample');
          formData.append('saveType', 'Xlsx');
          formData.append(
            'PdfLayoutSettings',
            JSON.stringify({ FitSheetOnOnePage: false })
          );
          fetch(
            'https://services.syncfusion.com/angular/production/api/spreadsheet/save',
            {
              method: 'POST',
              headers: { Authorization: 'YOUR TEXT' },
              body: formData,
            }
          ).then((response) => {
            response.blob().then((data) => {
              let anchor: HTMLElement = createElement('a', {
                attrs: { download: 'Sample.xlsx' },
              });
              let url = URL.createObjectURL(data);
              (anchor as HTMLAnchorElement).href = url;
              document.body.appendChild(anchor);
              anchor.click();
              URL.revokeObjectURL(url);
              document.body.removeChild(anchor);
            });
          });
        });
    }
  }
}
