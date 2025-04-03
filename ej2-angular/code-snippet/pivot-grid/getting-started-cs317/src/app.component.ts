import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit, ViewChild } from '@angular/core';
import {
    PivotView, FieldListService, CalculatedFieldService,
    ToolbarService, ConditionalFormattingService, ToolbarItems, DisplayOption, IDataSet
} from '@syncfusion/ej2-angular-pivotview';
import{ getInstance, select} from '@syncfusion/ej2-base';
import {DropDownList} from '@syncfusion/ej2-dropdowns';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { Pivot_Data } from './datasource';

let isInitial: boolean = true;

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
    selector: 'app-container',
    providers: [CalculatedFieldService, ToolbarService, ConditionalFormattingService, FieldListService],
    template: `<div><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings 
  allowExcelExport='true' allowConditionalFormatting='true' allowPdfExport='true' showToolbar='true'
   allowCalculatedField='true' showFieldList='true' width='100%' [displayOption]='displayOption' 
   height='350' [toolbar]='toolbarOptions' (saveReport)='saveReport($event)' (loadReport)='loadReport($event)' 
   (fetchReport)='fetchReport($event)' (renameReport)='renameReport($event)' (removeReport)='removeReport($event)' 
   (newReport)='newReport()' (dataBound)="dataBound()" (load)="load()"></ejs-pivotview></div>`
})

export class AppComponent implements OnInit {
    public dataSourceSettings?: DataSourceSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public displayOption?: DisplayOption;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: any;

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
            this.pivotGridObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
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
    dataBound() {
        // Set the default report name to load it in the pivot table during initial rendering.
        if (this.pivotGridObj && isInitial) {
            isInitial = false;
            this.pivotGridObj.toolbarModule.action = 'Load';
            let reportList = getInstance(select('#' + this.pivotGridObj.element.id + '_reportlist', this.pivotGridObj.element), DropDownList);
            (reportList as DropDownList).value = 'Default report';
            this.loadReport({ reportName: 'Default report' });
        }
    }
    load(){
        // Save the desired report that needs to be loaded at initial rendering here.
        let dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            columns: [{ name: 'Year' }],
            enableSorting: true,
            allowLabelFilter: true,
            values: [{ name: 'Sold', caption: 'Units Sold' }],
            allowValueFilter: true,
            formatSettings: [{ name: 'Sold', format: 'C0' }],
            rows: [{ name: 'Country' }],
          };
          let displayOption = { view: 'Both' };
          let gridSettings = {columnWidth: 100};
          let report = { dataSourceSettings: dataSourceSettings, displayOption: displayOption, gridSettings: gridSettings };
          let reports = [
            {
              report: JSON.stringify(report),
              reportName: 'Default report',
            },
          ];
        localStorage['pivotviewReports'] = JSON.stringify(reports);
    }
    newReport() {
        this.pivotGridObj?.setProperties({ dataSourceSettings: { columns: [], rows: [], values: [], filters: [] } }, false);
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


