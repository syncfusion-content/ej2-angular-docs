import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit,ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { data } from './datasource';

@Component({
imports: [
        
        DropDownButtonModule,
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<button ejs-dropdownbutton [items]='items' content='Clear' (select)='itemSelect($event)'></button> <ejs-spreadsheet #spreadsheet (created)='created()'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='data'></e-range></e-ranges><e-columns><e-column [width]=90></e-column><e-column [width]=100></e-column><e-column [width]=96></e-column><e-column [width]=120></e-column><e-column [width]=130></e-column><e-column [width]=120></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    ngOnInit(): void {
        this.data = data;
    }
    public items: ItemModel[] = [
    {
      text: "Clear All"
    },
    {
      text: "Clear Formats"
    },
    {
      text: "Clear Contents"
    },
    {
      text: "Clear Hyperlinks"
    }];
    created() {
      this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', fontSize: '12pt'}, 'A1:E1');
      this.spreadsheetObj!.cellFormat({ color: '#10c469' }, 'B1:B10');
    }
    public itemSelect(args: MenuEventArgs) {
     if (args.item.text === 'Clear All')
      this.spreadsheetObj!.clear({ type: 'Clear All', range: 'D1:D10' }); // Clear the content, formats and hyperlinks applied in the provided range.
    if (args.item.text === 'Clear Formats')
      this.spreadsheetObj!.clear({ type: 'Clear Formats', range: 'B1:B10' }); // Clear the formats applied in the provided range
    if (args.item.text === 'Clear Contents')
      this.spreadsheetObj!.clear({ type: 'Clear Contents', range: 'A1:A10' }); // Clear the content in the provided range
    if (args.item.text === 'Clear Hyperlinks')
      this.spreadsheetObj!.clear({ type: 'Clear Hyperlinks', range: 'F2:F6' }); // Clear the hyperlinks applied in the provided range
    }
  };



