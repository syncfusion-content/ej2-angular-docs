import { Component, OnInit, ViewChild } from '@angular/core';
import { defaultData } from './datasource';
import { SpreadsheetComponent, SheetModel, getRangeIndexes, getSwapRange, getRangeAddress, CellModel } from '@syncfusion/ej2-angular-spreadsheet';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-container',
    template: `<button class="e-btn custom-btn" (click)="onClick()">Get Selected Cell Values</button>
    <ejs-spreadsheet #spreadsheet (created)='created()'> 
        <e-sheets> 
            <e-sheet> 
                <e-ranges> 
                    <e-range [dataSource]='dataSource'>
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
    public dataSource?: object[];
    @ViewChild('spreadsheet')
    public spreadsheetObj!: SpreadsheetComponent;
    ngOnInit(): void {
        this.dataSource = defaultData;
    }
    created() {
        // Applies cell formatting to specified range of the active sheet.
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    };
    onClick(): void {
        let sheet: SheetModel = this.spreadsheetObj.getActiveSheet();
        let selectedRange: string | undefined = sheet.selectedRange;
        let index: number[] = getRangeIndexes(selectedRange as string);
        let cellRange: number[] = getSwapRange(index);
        let swappedRange: string = getRangeAddress(cellRange);
        let valueObject: string[] = [];
        let range: string = sheet.name + '!' + swappedRange;
        // Get the collection of selected cell values by using the getData() method.
        this.spreadsheetObj.getData(range).then((cells: Map<string, CellModel>) => {
            cells.forEach((cell: CellModel) => {
                valueObject.push(isNullOrUndefined((cell.value) as string) ? '' : (cell.value) as string);
            });
            console.log("Collection of selected cell values:", valueObject);
        });
    }
}