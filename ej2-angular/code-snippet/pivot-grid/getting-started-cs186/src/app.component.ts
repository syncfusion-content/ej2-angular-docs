

import { Component, ViewChild } from '@angular/core';
import {
    IDataOptions, PivotView, FieldListService, CalculatedFieldService, NumberFormattingService,
    ToolbarService, ConditionalFormattingService, ToolbarItems, DisplayOption, IDataSet, DataSourceSettings
} from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [CalculatedFieldService, ToolbarService, ConditionalFormattingService, FieldListService, NumberFormattingService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings allowExcelExport='true' allowNumberFormatting='true' allowConditionalFormatting='true' allowPdfExport='true' showToolbar='true' allowCalculatedField='true' showFieldList='true' width='100%' [displayOption]='displayOption' height='350' [toolbar]='toolbarOptions' (saveReport)='saveReport($event)' (loadReport)='loadReport($event)' (fetchReport)='fetchReport($event)' (renameReport)='renameReport($event)' (removeReport)='removeReport($event)' (newReport)='newReport()'></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public toolbarOptions?: ToolbarItems[];
    public displayOption?: DisplayOption;

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
    newReport() {
        this.pivotGridObj?.setProperties({ dataSourceSettings: { columns: [], rows: [], values: [], filters: [] } }, false);
    }
    ngOnInit(): void {
        this.displayOption = { view: 'Both' } as DisplayOption;

        this.toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
            'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'] as ToolbarItems[];
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
 }


