

import { Component, OnInit } from '@angular/core';
import { IDataOptions, EnginePopulatedEventArgs, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { noData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings width=width height='350' (enginePopulated)='enginePopulated($event)'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public width?: string;
    public height?: number;
    enginePopulated(args: EnginePopulatedEventArgs) {
        //trigger after engine is populated
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



