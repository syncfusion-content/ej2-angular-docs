

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public width?: string;

    ngOnInit(): void {
        this.width = '100%';

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            formatSettings: [{ name: 'Year', format: 'dd/MM/yyyy-hh:mm', type: 'date' }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            filters: []
        };
    }
}



