import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit,ViewChild } from '@angular/core';
import { tradeData } from './datasource';
import { SpreadsheetComponent, SortDescriptor } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet (dataBound)='dataBound()' (sortComplete)='sortComplete($event)'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='tradeData'></e-range></e-ranges><e-columns><e-column [width]=100></e-column><e-column [width]=120></e-column><e-column [width]=96></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {

    public tradeData?: object[];
    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    ngOnInit(): void {
        this.tradeData = tradeData;
    }
    dataBound(){
        let sortDescriptors: SortDescriptor[] = [
            {
                field: 'F',
                order: 'Ascending'
            },
            {
                field: 'E',
                order: 'Ascending'
            },
            {
                field: 'C',
                order: 'Descending'
            }];
            if (this.spreadsheetObj!.activeSheetIndex === 0) {
                this.spreadsheetObj!.sort({ sortDescriptors: sortDescriptors, containsHeader: true }, 'A1:H30');
            }
    };
    sortComplete (args : any) {
        this.spreadsheetObj!.selectRange(args.range);
        // code here.
    }
}


