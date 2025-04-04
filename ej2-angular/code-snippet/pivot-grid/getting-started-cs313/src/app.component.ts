import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'

import { Component, ViewChild, OnInit } from '@angular/core';
import {
    PivotView, FieldListService, IDataSet, PDFExportService,
    PivotActionBeginEventArgs, ToolbarItems, DisplayOption, ToolbarService, PivotChartService
} from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
    selector: 'app-container',
    providers: [FieldListService, ToolbarService, PDFExportService, PivotChartService],
    // specifies the template string for the pivot table component
    template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings allowPdfExport='true'
    showFieldList='true' width='100%' [displayOption]='displayOption' height='350' [toolbar]='toolbarOptions' showFieldList='true' 
    (actionBegin)='actionBegin($event)' showToolbar='true' [chartSettings]='chartSettings'></ejs-pivotview>`
})

export class AppComponent implements OnInit {

    public dataSourceSettings?: DataSourceSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public displayOption?: DisplayOption;
    public chartSettings?: ChartSettings;

    actionBegin(args: PivotActionBeginEventArgs): void {
        if (args.actionName == 'PDF export') {
            args.cancel = true;
            this.pivotGridObj.pdfExport({}, false, undefined, false, true);
        }
    }

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: any;

    ngOnInit(): void {

        this.displayOption = { view: 'Both' } as DisplayOption;

        this.toolbarOptions = ['Grid', 'Chart', 'Export', 'FieldList'] as ToolbarItems[];

        this.chartSettings = { chartSeries: { type: 'Column' }} as ChartSettings;

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
}