import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet'


import { Component, OnInit, ViewChild } from '@angular/core';
import { defaultData } from './datasource';
import { PredicateModel } from '@syncfusion/ej2-grids';
import { ExtendedRowModel, SpreadsheetComponent, UsedRangeModel, SheetModel } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        SpreadsheetModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<button class="e-btn custom-btn" (click)="onClick()">Get Filtered Rows</button>
    <ejs-spreadsheet #spreadsheet (created)='created()'> 
        <e-sheets> 
            <e-sheet> 
                <e-ranges> 
                    <e-range [dataSource]='filterData'>
                    </e-range>
                </e-ranges>
                <e-columns>
                    <e-column [width]=150></e-column>
                    <e-column [width]=120></e-column>
                    <e-column [width]=100></e-column>
                </e-columns>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>`
})

export class AppComponent implements OnInit {
    public filterData?: object[];
    @ViewChild('spreadsheet')
    public spreadsheetObj!: SpreadsheetComponent;
    ngOnInit(): void {
        this.filterData = defaultData;
    }
    created() {
        // Applies cell formatting to specified range of the active sheet.
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        // Construct the predicate model to be updated to the data.
        let predicates: PredicateModel[] = [{
            field: 'C',
            operator: 'equal',
            value: 'Pink',
            matchCase: false
        }];
        // Apply filter to the specified range.
        this.spreadsheetObj.applyFilter(predicates, 'A1:C7');
    };
    onClick(): void {
        let activeSheet: SheetModel = this.spreadsheetObj.getActiveSheet();
        let usedRange: UsedRangeModel = activeSheet.usedRange!;
        for (let i: number = 0; i <= usedRange.rowIndex!; i++) {
            // Get the filtered row using isFiltered property.
            let filteredRow: Object = (activeSheet.rows![i] as ExtendedRowModel).isFiltered!;
            if (!filteredRow) {
                let rowData: Object = this.spreadsheetObj.getRowData(i);
                console.log("Row:", i + 1, "Cells", rowData);
            }
        }
    }
}