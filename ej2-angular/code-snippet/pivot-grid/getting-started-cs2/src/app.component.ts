

import { Component, OnInit } from '@angular/core';
import { IDataOptions, GroupingBarService, AggregateTypes, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [GroupingBarService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings width=width showGroupingBar='true' [aggregateTypes]='aggregateTypesOption'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public width?: string;
    public aggregateTypesOption?: AggregateTypes[];
    ngOnInit(): void {
        this.width = '100%';
        this.aggregateTypesOption = ['DistinctCount', 'Avg', 'Product'],
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount', type: 'Sum' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            filters: [],
        };
    }
}



