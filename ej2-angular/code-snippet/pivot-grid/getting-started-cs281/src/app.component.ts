

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<div><ejs-pivotview #pivotview id='PivotView' height='300' [dataSourceSettings]=dataSourceSettings enablePersistence='true' ></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotViewComponent;

    ngOnInit(): void {

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };

    }
}



