

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, GroupingBarService, GroupingBarSettings } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [GroupingBarService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showGroupingBar='true' width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public groupingSettings?: GroupingBarSettings;

    ngOnInit(): void {

        this.width = "100%";

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year', showRemoveIcon: false }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold', showRemoveIcon: false }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products', showRemoveIcon: false }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
}



