import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, getFormatFromType, ChartModel, BeforeChartEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { chartData } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" (actionBegin)="onActionBegin($event)">
        <e-sheets>
            <e-sheet name="Book Sales">
                <e-rows>
                    <e-row [height]=30>
                        <e-cells>
                            <e-cell value="Book Sales 2016-2020" [style]="{ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }"></e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>
                <e-ranges>
                    <e-range [dataSource]="data" startCell="A3"></e-range>
                </e-ranges>
                <e-columns>
                    <e-column [width]=110></e-column>
                    <e-column [width]=100></e-column>
                    <e-column [width]=100></e-column>
                    <e-column [width]=100></e-column>
                    <e-column [width]=100></e-column>
                    <e-column [width]=100></e-column>
                </e-columns>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;
    data: Object[] = chartData;
    created() {
        this.spreadsheetObj!.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A3:F3');
        this.spreadsheetObj!.numberFormat(getFormatFromType('Currency'), 'B4:F8');
        this.spreadsheetObj!.merge('A1:F1');
    }
    onActionBegin(args: BeforeChartEventArgs | any){
        if (args.action === 'beforeInsertChart' && args.args.eventArgs.type.includes('Line')) {
            args.args.eventArgs.markerSettings.shape = 'Triangle';
            args.args.eventArgs.markerSettings.isFilled = false;
            args.args.eventArgs.markerSettings.size = 10;
        }
    }
}


