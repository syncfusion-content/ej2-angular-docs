import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet'

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, ChartModel, getFormatFromType } from '@syncfusion/ej2-angular-spreadsheet';
import { inventoryData, cartData, stockData } from './datasource';

@Component({
imports: [
        
        SpreadsheetModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div class="control-section">
    <ejs-spreadsheet #spreadsheet openUrl="https://services.syncfusion.com/angular/production/api/spreadsheet/open" saveUrl="https://services.syncfusion.com/angular/production/api/spreadsheet/save" (created)="created()">
        <e-sheets>
            <e-sheet name="Inventory List" selectedRange="A2:A2">
                <e-ranges>
                    <e-range [dataSource]="inventoryData" startCell="A2"></e-range>
                </e-ranges>
                <e-columns>
                    <e-column [width]=100></e-column>
                    <e-column [width]=158></e-column>
                    <e-column [width]=100></e-column>
                    <e-column [width]=110></e-column>
                    <e-column [width]=130></e-column>
                    <e-column [width]=130></e-column>
                    <e-column [width]=97></e-column>
                    <e-column [width]=80></e-column>
                </e-columns>
                <e-rows>
                    <e-row [height]=56>
                        <e-cells>
                            <e-cell value="Inventory List"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row [index]="0">
                        <e-cells>
                            <e-cell [index]="9" [chart]="chart"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row [index]="13" [height]=36>
                        <e-cells>
                            <e-cell [index]="3" value="Total Amount:"></e-cell>
                            <e-cell formula="=ROUND(SUM(E3:E13),1)"></e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>
            </e-sheet>
            <e-sheet name="Shopping Cart" selectedRange="A3:A3">
                <e-ranges>
                    <e-range [dataSource]="cartData" startCell="A3"></e-range>
                </e-ranges>
                <e-columns>
                    <e-column [width]=150></e-column>
                    <e-column [width]=150></e-column>
                    <e-column [width]=150></e-column>
                    <e-column [width]=80></e-column>
                    <e-column [width]=100></e-column>
                    <e-column [width]=100></e-column>
                </e-columns>
                <e-rows>
                    <e-row>
                        <e-cells>
                            <e-cell value="Shopping Cart" [style]="{
                                fontSize: '20pt', fontWeight: 'bold', fontFamily: 'Comic Sans MS',
                                textAlign: 'center', backgroundColor: 'rgb(53, 124, 210)', verticalAlign: 'middle', color: 'rgb(255, 255, 255)'
                            }"></e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>
            </e-sheet>
            <e-sheet name="Stock List" selectedRange="A2:A2">
                <e-ranges>
                    <e-range [dataSource]="stockData" startCell="A2"></e-range>
                </e-ranges>
                <e-columns>
                    <e-column [width]=150></e-column>
                    <e-column [width]=150></e-column>
                    <e-column [width]=150></e-column>
                    <e-column [width]=150></e-column>
                </e-columns>
                <e-rows>
                    <e-row>
                        <e-cells>
                            <e-cell value="Stock List" [style]="{
                                fontSize: '15pt', fontWeight: 'bold', fontFamily: 'Comic Sans MS',
                                textAlign: 'center', backgroundColor: 'rgb(53, 124, 210)', verticalAlign: 'middle', color: 'rgb(255, 255, 255)'
                            }"></e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
</div>`
})

export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj!: SpreadsheetComponent;
    inventoryData: object[] = inventoryData;
    cartData: object[] = cartData;
    stockData: object[] = stockData;
    chart: ChartModel[] = [{ type: "Column", range: "A3:F8" }]

    created(): void {
        this.spreadsheetObj.merge('Inventory List!A1:I1');
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Inventory List!A2:H2');
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle', fontSize: '13pt', }, 'Inventory List!A1:H1');
        this.spreadsheetObj.conditionalFormat({ type: 'BlueDataBar', range: 'Inventory List!E3:E13' });
        this.spreadsheetObj.conditionalFormat({ type: 'GreenDataBar', range: 'Inventory List!F3:F13' });
        this.spreadsheetObj.conditionalFormat({ type: 'ThreeStars', range: 'Inventory List!H3:H13' });
        // Add Data validation to range.
        this.spreadsheetObj.addDataValidation({ type: 'WholeNumber', operator: 'GreaterThan', value1: '20', ignoreBlank: false, }, 'Inventory List!C4:C13');
        // Apply cell format
        this.spreadsheetObj.cellFormat({ backgroundColor: '#d8e8f1' }, 'Inventory List!A4:I4');
        this.spreadsheetObj.cellFormat({ backgroundColor: '#d8e8f1' }, 'Inventory List!A6:I6');
        this.spreadsheetObj.cellFormat({ backgroundColor: '#d8e8f1' }, 'Inventory List!A8:I8');
        this.spreadsheetObj.cellFormat({ backgroundColor: '#d8e8f1' }, 'Inventory List!A10:I10');
        this.spreadsheetObj.cellFormat({ backgroundColor: '#d8e8f1' }, 'Inventory List!A12:I12');
        this.spreadsheetObj.cellFormat({ color: '#004078' }, 'Inventory List!A3:I13');
        this.spreadsheetObj.cellFormat({ textAlign: 'center' }, 'Inventory List!A1:A13');
        this.spreadsheetObj.cellFormat({ textAlign: 'center' }, 'Inventory List!C1:C13');
        this.spreadsheetObj.cellFormat({ fontSize: '24pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#357CD2', verticalAlign: 'middle', color: '#ffffff' }, 'Inventory List!A1:I1');
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#A4D6FA', verticalAlign: 'middle', color: '#004078', }, 'Inventory List!A2:I2');
        this.spreadsheetObj.cellFormat({ backgroundColor: '#A4D6FA', textAlign: 'right', verticalAlign: 'middle', color: '#004078', fontSize: '14pt' }, 'Inventory List!A14:I14');
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold' }, 'Inventory List!E14:E14');
        // Apply number format.
        this.spreadsheetObj.numberFormat(getFormatFromType('Currency'), 'Inventory List!D3:F14');
        // Apply merge to cell range.
        this.spreadsheetObj.merge('Shopping Cart!A1:F2');
        this.spreadsheetObj.merge('Stock List!A1:D1');
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', backgroundColor: 'rgb(164, 214, 250)', fontFamily: "Book Antiqua", color: 'rgb(0, 64, 120)' }, 'Shopping Cart!A3:F3');
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', backgroundColor: 'rgb(164, 214, 250)', fontFamily: "Book Antiqua", color: 'rgb(0, 64, 120)' }, 'Stock List!A2:D2');
        const rangeAddress: string[] = ['Shopping Cart!A5:F5', 'Shopping Cart!A7:F7', 'Shopping Cart!A9:f9', 'Shopping Cart!A11:F11',
            'Shopping Cart!A13:F13', 'Stock List!A4:D4', 'Stock List!A6:D6', 'Stock List!A8:D8', 'Stock List!A10:D10'];
        for (let i = 0; i < rangeAddress.length; i++) {
            this.spreadsheetObj.cellFormat({ backgroundColor: 'rgb(216, 232, 241)' }, rangeAddress[i]);
        }
        this.spreadsheetObj.cellFormat({ textAlign: 'center' }, 'Shopping Cart!D4:E12');
        this.spreadsheetObj.cellFormat({ textAlign: 'center' }, 'Stock List!B3:D12');
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold' }, 'Shopping Cart!E13:F13');
        this.spreadsheetObj.setBorder({ border: '2.5px solid #FFB936' }, 'Shopping Cart!A1:F13', 'Outer');
        this.spreadsheetObj.setBorder({ border: '1.25px solid #FFB936' }, 'Shopping Cart!A1:F13', 'Inner');
        this.spreadsheetObj.setBorder({ border: '1px solid #0400FF' }, 'Stock List!A1:D11', 'Outer');
        this.spreadsheetObj.setBorder({ border: '1px solid #0400FF' }, 'Stock List!A1:D11', 'Inner');
        this.spreadsheetObj.updateCell({ value: 'Total Amount' }, "Shopping Cart!E13");
        this.spreadsheetObj.updateCell({ formula: '=SUM(F4:F12)' }, "Shopping Cart!F13");
        this.spreadsheetObj.conditionalFormat({ type: 'PurpleDataBar', range: 'Shopping Cart!E4:E12' });
        this.spreadsheetObj.conditionalFormat({ type: 'GreenDataBar', range: 'Stock List!D3:D11' });
        this.spreadsheetObj.conditionalFormat({ type: 'GYRColorScale', range: 'Stock List!C3:C11' });
        this.spreadsheetObj.conditionalFormat({ type: 'RWGColorScale', range: 'Shopping Cart!F4:F12' });
        this.spreadsheetObj.conditionalFormat({ type: 'Between', cFColor: 'RedFT', value: '10,60', range: 'Shopping Cart!D4:D12' });
        this.spreadsheetObj.element.focus();
    };
}
