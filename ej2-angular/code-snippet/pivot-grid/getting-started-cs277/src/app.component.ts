

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, GroupingBarService, HeadersSortEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [GroupingBarService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showGroupingBar='true' (onHeadersSort)='onHeadersSort($event)' width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;

    onHeadersSort(args: HeadersSortEventArgs): void {
        if (args.fieldName == 'Country') {
            args.members = ['United Kingdom', 'Germany'];
            args.IsOrderChanged = true;
        }
        if (args.fieldName == 'Year') {
            args.members = ['FY 2017', 'FY 2015'];
            args.IsOrderChanged = true;
        }
    }

    ngOnInit(): void {

        this.width = "100%";

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            filters: []
        };
    }
}



