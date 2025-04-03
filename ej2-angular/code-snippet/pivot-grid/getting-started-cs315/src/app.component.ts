import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'

import { Component, OnInit, ViewChild } from '@angular/core';
import { PivotView, FieldListService, IDataSet, AggregateTypes } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { L10n } from '@syncfusion/ej2-base';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

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
    providers: [FieldListService],
    template: `<div class="col-md-8"> <ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings [width]=width height=height 
   (aggregateCellInfo)='aggregateCellInfo($event)' showFieldList='true' (dataBound)="dataBound($event)"></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {

    public width?: string;
    public height?: number;
    public dataSourceSettings?: DataSourceSettingsModel;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj: any;

    aggregateCellInfo(args: any) {
        if (args.aggregateType === 'CustomAggregateType1') {
            args.value = args.value * 100;
        }
        if (args.aggregateType === 'CustomAggregateType2') {
            args.value = args.value / 100;
        }
    }

    dataBound(args: any): void {
        this.pivotGridObj.getAllSummaryType = function () {
            return SummaryType as AggregateTypes[];
        };
        this.pivotGridObj.pivotFieldListModule.aggregateTypes = SummaryType as AggregateTypes[];
        this.pivotGridObj.pivotFieldListModule.getAllSummaryType = function () {
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

        this.width = "100%";
        this.height = 350;

        this.dataSourceSettings = {
            expandAll: false,
            dataSource: Pivot_Data as IDataSet[],
            columns: [{ name: 'Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold' }, { name: 'Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
        };
    }
}



