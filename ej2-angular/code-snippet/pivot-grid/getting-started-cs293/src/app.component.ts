

import { Component, ViewChild } from '@angular/core';
import {
    IDataOptions, PivotView, FieldListService, CalculatedFieldService,
    ToolbarService, ConditionalFormattingService, ToolbarItems, DisplayOption, IDataSet
} from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [CalculatedFieldService, ToolbarService, ConditionalFormattingService, FieldListService],
  // specifies the template string for the pivot table component
  template: `<div><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings allowExcelExport='true' allowConditionalFormatting='true' allowPdfExport='true' showToolbar='true' allowCalculatedField='true' showFieldList='true' width='100%' [displayOption]='displayOption' height='350' [toolbar]='toolbarOptions' (saveReport)='saveReport($event)' (loadReport)='loadReport($event)' (fetchReport)='fetchReport($event)' (renameReport)='renameReport($event)' (removeReport)='removeReport($event)' (newReport)='newReport()' (beforeExport)='beforeExport($event)'></ejs-pivotview></div>`
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
            this.pivotGridObj!.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
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
    beforeExport(args: any): void {
            args.excelExportProperties = {
                header: {
                    headerRows: 2,
                    rows: [
                        { cells: [{ colSpan: 4, value: "Pivot Table", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, underline: true } }] }
                    ]
                },
                footer: {
                    footerRows: 4,
                    rows: [
                        { cells: [{ colSpan: 4, value: "Thank you for your business!", style: { hAlign: 'Center', bold: true } }] },
                        { cells: [{ colSpan: 4, value: "!Visit Again!", style: { hAlign: 'Center', bold: true } }] }
                    ]
                }
            };
            args.pdfExportProperties = {
                header: {
                    fromTop: 0,
                    height: 130,
                    contents: [
                        {
                            type: 'Text',
                            value: "Pivot Table",
                            position: { x: 0, y: 50 },
                            style: { textBrushColor: '#000000', fontSize: 13, dashStyle:'Solid',hAlign:'Center' }
                        }
                    ]
                },
                footer: {
                    fromBottom: 160,
                    height: 150,
                    contents: [
                        {
                            type: 'PageNumber',
                            pageNumberType: 'Arabic',
                            format: 'Page {$current} of {$total}',
                            position: { x: 0, y: 25 },
                            style: { textBrushColor: '#02007a', fontSize: 15 }
                        }
                    ]
                }
            };
        }
    ngOnInit(): void {
        this.displayOption = { view: 'Both' } as DisplayOption;

        this.toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
            'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'FieldList'] as ToolbarItems[];
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


