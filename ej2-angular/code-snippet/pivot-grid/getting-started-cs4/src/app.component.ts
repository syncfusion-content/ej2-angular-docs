

import { Component } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, GroupingBarService, GroupingBarSettings } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [GroupingBarService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width showGroupingBar='true' [groupingBarSettings]='groupingSettings'></ejs-pivotview>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public groupingSettings?: GroupingBarSettings;
    public width?: string;
    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
            showAggregationOnValueField: false
        };
        this.width = "100%";
        this.groupingSettings = {
            showValueTypeIcon: false
        } as GroupingBarSettings;
    }
 }


