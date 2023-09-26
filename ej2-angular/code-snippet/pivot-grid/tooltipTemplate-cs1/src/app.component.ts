

import { Component, ViewChild } from '@angular/core';
import {
    IDataOptions, PivotView, ToolbarService, ToolbarItems, DisplayOption, IDataSet, PivotChartService
} from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [ToolbarService, PivotChartService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings showToolbar='true' width='100%' [displayOption]='displayOption' height='350' tooltipTemplate='#Template' [toolbar]='toolbarOptions' [chartSettings]='chartSettings'></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public toolbarOptions?: ToolbarItems[];
    public displayOption?: DisplayOption;
    public chartSettings?: ChartSettings;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;
    ngOnInit(): void {
        this.displayOption = { view: 'Both' } as DisplayOption;

        this.chartSettings = { chartSeries: { type: 'Column', animation: { enable: false } },
                               tooltip:{ template:'<span class="wrap">${aggregateType} of ${valueField}: ${value}</span>' }
      } as ChartSettings;

        this.toolbarOptions = ['Grid', 'Chart'] as ToolbarItems[];
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
 }


