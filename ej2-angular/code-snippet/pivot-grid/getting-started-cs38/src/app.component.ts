

import { Component, OnInit } from '@angular/core';
import { IDataOptions, EnginePopulatingEventArgs, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { noData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings width=width height='350' (enginePopulating)='enginePopulating($event)'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public width?: string;
    public height?: number;
    enginePopulating(args: EnginePopulatingEventArgs | any) {
        //trigger before engine starts to populate
        args.dataSourceSettings.columns[0].caption = 'Full Year';
        args.dataSourceSettings.emptyCellsTextContent = '###'
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



