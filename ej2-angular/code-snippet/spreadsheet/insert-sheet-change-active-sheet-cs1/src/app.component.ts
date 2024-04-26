import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet'

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { data, employeeData } from './datasource';

@Component({
imports: [
        
        SpreadsheetModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div >
    <button class="e-btn custom-btn" (click)='onClick()'>Insert Sheet</button>
    <ejs-spreadsheet #spreadsheet >
        <e-sheets>
            <e-sheet name="Car Sales Report">
                <e-ranges>
                    <e-range [dataSource]="dataSource"></e-range>
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
    @ViewChild('spreadsheet')
    spreadsheetObj!: SpreadsheetComponent;
    dataSource: Object[] = data;
    onClick(): void {
        this.spreadsheetObj.insertSheet(
            [
                {
                    index: 1,
                    name: 'new_sheet',
                    ranges: [
                        {
                            dataSource: employeeData,
                            startCell: 'A1'
                        },
                    ]
                },
            ]
        );
        // Use the timeout function to wait until the sheet is inserted.
        setTimeout(() => {
            // Method for switching to a new sheet.
            this.spreadsheetObj.goTo('new_sheet!A1');
        })
    }
}
