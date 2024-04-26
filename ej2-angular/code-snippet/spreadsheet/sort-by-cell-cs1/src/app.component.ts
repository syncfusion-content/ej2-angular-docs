import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit,ViewChild } from '@angular/core';
import { defaultData } from './datasource';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet (dataBound)='dataBound()' (sortComplete)='sortComplete($event)'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='defaultData'></e-range></e-ranges><e-columns><e-column [width]=130></e-column><e-column [width]=92></e-column><e-column [width]=96></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {

    public defaultData?: object[];
    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    ngOnInit(): void {
        this.defaultData = defaultData;
    }
    dataBound(){
        if (this.spreadsheetObj!.activeSheetIndex === 0) {
            this.spreadsheetObj!.cellFormat({ fontWeight: 'bold' }, 'A1:H1');
            this.spreadsheetObj!.sort({ containsHeader: true }, 'A1:H11');
        }
    };
    sortComplete (args : any) {
        this.spreadsheetObj!.selectRange(args.range);
        // code here.
    }
}



