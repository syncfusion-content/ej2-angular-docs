

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, DisplayOption, PivotChartService, FieldListService } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [PivotChartService, FieldListService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  [chartSettings]='chartSettings' [showFieldList]='true' [displayOption]='displayOption'></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public chartSettings?: ChartSettings;
    public displayOption?: DisplayOption;

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

        this.displayOption = { view: 'Chart' } as DisplayOption;
        this.chartSettings = { chartSeries: { type: 'Column' }} as ChartSettings;
    }
}



