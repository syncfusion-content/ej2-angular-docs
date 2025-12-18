import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule, ExcelExportService, AggregateTypes, FieldListService, SummaryTypes } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { L10n } from '@syncfusion/ej2-base';

let SummaryType: string[] = [
    'Sum',
    'Count',
    'DistinctCount',
    'Avg',
    'CustomAggregateType1',
    'CustomAggregateType2',

];

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `<div class="col-md-8">
                <ejs-pivotview #pivotview id='PivotTable' height='350' [dataSourceSettings]=dataSourceSettings 
                    allowExcelExport='true' [width]=width (aggregateCellInfo)='aggregateCellInfo($event)' 
                    showFieldList='true' (dataBound)="dataBound()">
                </ejs-pivotview>
            </div>
            <div class="col-md-2"><button ej-button id='export'>Export</button></div>`,
    providers: [ExcelExportService, FieldListService],
})
export class AppComponent implements OnInit {
    public width?: string;
    public button?: Button;
    public dataSourceSettings?: DataSourceSettingsModel;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    aggregateCellInfo(args: any) {
        if (args.aggregateType === 'CustomAggregateType1') {
            args.value = args.value * 100;
        }
        if (args.aggregateType === 'CustomAggregateType2') {
            args.value = args.value / 100;
        }
    }

    dataBound(): void {
        (this.pivotGridObj as any).getAllSummaryType = function () {
            return SummaryType as AggregateTypes[];
        };
        (this.pivotGridObj as any).pivotFieldListModule.aggregateTypes = SummaryType as AggregateTypes[];
        (this.pivotGridObj as any).pivotFieldListModule.getAllSummaryType = function () {
            return SummaryType as AggregateTypes[];
        };
    }

    ngOnInit(): void {
        L10n.load({
            'en-US': {
                pivotview: {
                    CustomAggregateType1: 'Custom Aggregate Type 1',
                    CustomAggregateType2: 'Custom Aggregate Type 2',
                },
                pivotfieldlist: {
                    CustomAggregateType1: 'Custom Aggregate Type 1',
                    CustomAggregateType2: 'Custom Aggregate Type 2',
                }
            }
        });

        this.dataSourceSettings = {
            dataSource: pivotData as IDataSet[],
            columns: [{ name: 'Year' }],
            values: [{ name: 'Sold', type: 'CustomAggregateType1' as SummaryTypes }, { name: 'Amount', type: 'CustomAggregateType2' as SummaryTypes }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
        };

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.excelExport();
        };
    }
}
