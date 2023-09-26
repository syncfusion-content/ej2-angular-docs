

import { Component, OnInit,ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { data } from './datasource';

@Component({
    selector: 'app-container',
    template: "<button ejs-dropdownbutton [items]='items' content='Save' (select)='itemSelect($event)'></button> <ejs-spreadsheet #spreadsheet > <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='data'></e-range></e-ranges><e-columns><e-column [width]=90></e-column><e-column [width]=100></e-column><e-column [width]=96></e-column><e-column [width]=120></e-column><e-column [width]=130></e-column><e-column [width]=120></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    ngOnInit(): void {
        this.data = data;
    }
    public items: ItemModel[] = [
        {
            text: "Save As xlsx"
        },
        {
            text: "Save As xls"
        },
        {
            text: "Save As csv"
        },
        {
            text: "Save As pdf"
        }];

    public itemSelect(args: MenuEventArgs) {
    if (args.item.text === 'Save As xlsx')
      this.spreadsheetObj!.save({url: 'https://services.syncfusion.com/angular/production/api/spreadsheet/save', fileName: "Sample", saveType: "Xlsx"});
    if (args.item.text === 'Save As xls')
      this.spreadsheetObj!.save({url: 'https://services.syncfusion.com/angular/production/api/spreadsheet/save', fileName: "Sample", saveType: "Xls"});
    if (args.item.text === 'Save As csv')
      this.spreadsheetObj!.save({url: 'https://services.syncfusion.com/angular/production/api/spreadsheet/save',fileName: "Sample", saveType: "Csv"});
    if (args.item.text === 'Save As pdf')
      this.spreadsheetObj!.save({url: 'https://services.syncfusion.com/angular/production/api/spreadsheet/save',fileName: "Sample", saveType: "Pdf"});
    }
  };



