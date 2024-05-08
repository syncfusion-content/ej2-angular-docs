import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit,ViewChild } from '@angular/core';
import { tradeData } from './datasource';
import { DataManager, DataUtil } from '@syncfusion/ej2-data';
import { SpreadsheetComponent, CellModel } from '@syncfusion/ej2-angular-spreadsheet';

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
        if (this.spreadsheetObj!.activeSheetIndex === 0) {
            this.spreadsheetObj!.sort({sortDescriptors: { field: 'F',  sortComparer: this.mySortComparer }, containsHeader: true}, 'A1:H20');
        }
    };
    sortComplete (args : any) {
        this.spreadsheetObj!.selectRange(args.range);
        // code here.
    }


mySortComparer(x: CellModel, y: CellModel): number {
// custom sort comparer to sort based on the custom list.
   let customList: string[] = ['Perfect', 'Sufficient', 'Insufficient'];
    let comparer: Function = DataUtil.fnSort('Ascending');
    return comparer(x ? customList.indexOf((x as any).value) : x, y ? customList.indexOf((y as any).value) : y);
};

}



