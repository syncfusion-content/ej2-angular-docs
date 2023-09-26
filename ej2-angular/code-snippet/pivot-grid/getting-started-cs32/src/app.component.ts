

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings width=width height='350'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public width?: string;
    public height?: number;
    ngOnInit(): void {
        this.width = '100%';

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            filters: [],
            valueIndex: 1
        };
    }
}



