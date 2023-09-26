

import { Component, OnInit } from '@angular/core';
import { IDataOptions,IDataSet, CellClickEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { noData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings width=width height='350' (cellClick)='cellClick($event)'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public width?: string;
    public height?: number;
    cellClick(args: CellClickEventArgs) {
        //trigger for evey cell click in pivot table
    }
    ngOnInit(): void {
        this.width = '100%';

        this.dataSourceSettings = {
        dataSource: noData as IDataSet[],
        expandAll: true,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        columns: [{ name: 'Date', showNoDataItems: true}],
        values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country'}, { name: 'State'}],
        filters: []
        };
    }
}



