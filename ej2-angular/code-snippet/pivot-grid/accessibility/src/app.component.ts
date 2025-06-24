import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, ViewChild } from '@angular/core';
import {
    PivotView, FieldListService, CalculatedFieldService, NumberFormattingService,
    ToolbarService, ConditionalFormattingService, ToolbarItems, DisplayOption, IDataSet, DataSourceSettings,
    GroupingBarSettings, CellEditSettings, GroupingBarService, GroupingService
} from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [
    CalculatedFieldService, ToolbarService, ConditionalFormattingService, FieldListService, NumberFormattingService, GroupingBarService, GroupingService
  ],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings
        allowExcelExport='true' allowNumberFormatting='true' allowConditionalFormatting='true' allowPdfExport='true' showToolbar='true'
        allowCalculatedField='true' showFieldList='true' width='100%' [displayOption]='displayOption' height='450' [toolbar]='toolbarOptions'
        (saveReport)='saveReport($event)' (loadReport)='loadReport($event)' (fetchReport)='fetchReport($event)' (renameReport)='renameReport($event)'
        (removeReport)='removeReport($event)' (newReport)='newReport()' showGroupingBar='true' [groupingBarSettings]='groupingBarSettings'
        [chartSettings]='chartSettings' allowGrouping='true' allowDeferLayoutUpdate='true' (toolbarRender)='toolbarRender($event)'>
    </ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings?: DataSourceSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public displayOption?: DisplayOption;
    public chartSettings?: ChartSettings;
    public groupingBarSettings?: GroupingBarSettings;
    public editSettings?: CellEditSettings;
    public gridSettings?: GridSettings;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    saveReport(args: any) {
        let reports = [];
        let isSaved: boolean = false;
        if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
            reports = JSON.parse(localStorage['pivotviewReports']);
        }
        if (args.report && args.reportName && args.reportName !== '') {
            reports.map(function (item: any): any {
                if (args.reportName === item.reportName) {
                    item.report = args.report; isSaved = true;
                }
            });
            if (!isSaved) {
                reports.push(args);
            }
            localStorage['pivotviewReports'] = JSON.stringify(reports);
        }
    }
    fetchReport(args: any) {
        let reportCollection: string[] = [];
        let reeportList: string[] = [];
        if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
            reportCollection = JSON.parse(localStorage['pivotviewReports']);
        }
        reportCollection.map(function (item: any): void { reeportList.push(item.reportName); });
        args.reportName = reeportList;
    }
    loadReport(args: any) {
        let reportCollection: string[] = [];
        if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
            reportCollection = JSON.parse(localStorage['pivotviewReports']);
        }
        reportCollection.map(function (item: any): void {
            if (args.reportName === item.reportName) {
                args.report = item.report;
            }
        });
        if (args.report) {
            (this.pivotGridObj!.dataSourceSettings as DataSourceSettings) = JSON.parse(args.report).dataSourceSettings;
        }
    }
    removeReport(args: any) {
        let reportCollection: any[] = [];
        if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
            reportCollection = JSON.parse(localStorage['pivotviewReports']);
        }
        for (let i: number = 0; i < reportCollection.length; i++) {
            if (reportCollection[i].reportName === args.reportName) {
                reportCollection.splice(i, 1);
            }
        }
        if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
            localStorage['pivotviewReports'] = JSON.stringify(reportCollection);
        }
    }
    renameReport(args: any) {
        let reportCollection: string[] = [];
        if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
            reportCollection = JSON.parse(localStorage['pivotviewReports']);
        }
        reportCollection.map(function (item: any): any { if (args.reportName === item.reportName) { item.reportName = args.rename; } });
        if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
            localStorage['pivotviewReports'] = JSON.stringify(reportCollection);
        }
    }
    toolbarRender(args: any) {
        args.customToolbar.splice(6, 0, {
            type: 'Separator' 
        });
        args.customToolbar.splice(9, 0, {
            type: 'Separator' 
        });
    }
    newReport() {
        this.pivotGridObj?.setProperties({ dataSourceSettings: { columns: [], rows: [], values: [], filters: [] } }, false);
    }
    ngOnInit(): void {
        this.displayOption = { view: 'Both' } as DisplayOption;

        this.toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
            'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'] as ToolbarItems[];

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: true,
            enableSorting: true,
            allowLabelFilter: true,
            allowValueFilter: true,
            sortSettings: [{ name: 'company', order: 'Descending' }],
            formatSettings: [{ name: 'balance', format: 'C' }, { name: 'date', format: 'dd/MM/yyyy-hh:mm', type: 'date' }],
            drilledMembers: [{ name: 'product', items: ['Bike', 'Car'] }, { name: 'gender', items: ['male'] }],
            filterSettings: [
                { name: 'date', type: 'Date', condition: 'Between', value1: new Date('02/16/2000'), value2: new Date('02/16/2002') },
                { name: 'age', type: 'Number', condition: 'Between', value1: '25', value2: '35' },
                { name: 'eyeColor', type: 'Exclude', items: ['blue'] }
            ],
            rows: [{ name: 'state' }, { name: 'eyeColor' }],
            columns: [{ name: 'gender', caption: 'Population' }, { name: 'isActive' }],
            values: [{ name: 'balance' }, { name: 'quantity' }],
            filters: [],
            conditionalFormatSettings: [
                {
                    measure: 'balance',
                    value1: 100000,
                    conditions: 'LessThan',
                    style: {
                        backgroundColor: '#80cbc4',
                        color: 'black',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    }
                },
                {
                    value1: 10,
                    value2: 20,
                    measure: 'quantity',
                    conditions: 'Between',
                    style: {
                        backgroundColor: '#f48fb1',
                        color: 'black',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    }
                }
            ]
        };

        this.groupingBarSettings = {
            showFieldsPanel: true
        } as GroupingBarSettings;

        this.chartSettings = { 
            value: 'Amount', enableExport: true, chartSeries: { type: 'Column', animation: { enable: false } }, enableMultipleAxis: false
        } as ChartSettings;

        this.editSettings = { 
            allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal'
        } as CellEditSettings;

        this.gridSettings = {
            columnWidth: 140,
            contextMenuItems: [
                'Aggregate', 'CalculatedField', 'Drillthrough', 'Excel Export', 'Pdf Export',
                'Csv Export', 'Expand', 'Collapse', 'Sort Ascending', 'Sort Descending'
            ]
        } as GridSettings
    }
}


