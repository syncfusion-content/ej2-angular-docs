import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { SpreadsheetComponent, getFormatFromType } from '@syncfusion/ej2-angular-spreadsheet';
import { data } from './datasource';
import deDELocalization from './locale.json';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import numberingSystems from './numberingSystems.json';

L10n.load(deDELocalization);
setCulture('de');
setCurrencyCode('EUR');
loadCldr(cagregorian, currencies, numbers, timeZoneNames, numberingSystems);

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet locale='de' listSeparator=';' [showRibbon]='false' [showSheetTabs]='false' (created)='created()'>
                    <e-sheets>
                        <e-sheet selectedRange='E14'>
                            <e-ranges>
                                <e-range [dataSource]='dataSource'></e-range>
                            </e-ranges>
                            <e-rows>
                                <e-row [index]=12>
                                    <e-cells>
                                        <e-cell [index]=3 value='Subtotal:'></e-cell>
                                        <e-cell formula='=SUBTOTAL(9;E2:E12)'></e-cell>
                                    </e-cells>
                                </e-row>
                                <e-row>
                                    <e-cells>
                                        <e-cell [index]=3 value='Discount (8,5%):'></e-cell>
                                        <e-cell formula='=PRODUCT(8,5;E13)/100'></e-cell>
                                    </e-cells>
                                </e-row>
                                <e-row>
                                    <e-cells>
                                        <e-cell [index]=3 value='Total Amount:'></e-cell>
                                        <e-cell formula='=E13-E14'></e-cell>
                                    </e-cells>
                                </e-row>
                            </e-rows>
                            <e-columns>
                                <e-column [width]=120></e-column>
                                <e-column [width]=180></e-column>
                                <e-column [width]=100></e-column>
                                <e-column [width]=120></e-column>
                                <e-column [width]=120></e-column>
                            </e-columns>
                        </e-sheet>
                    </e-sheets>
                </ejs-spreadsheet>`
})

export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj!: SpreadsheetComponent;
    dataSource: Object[] = data;

    created(): void {
        this.spreadsheetObj.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'A1:E1');
        this.spreadsheetObj.numberFormat(getFormatFromType('Currency'), 'D2:E12');
        this.spreadsheetObj.numberFormat(getFormatFromType('Currency'), 'E13:E15');
    }
};


