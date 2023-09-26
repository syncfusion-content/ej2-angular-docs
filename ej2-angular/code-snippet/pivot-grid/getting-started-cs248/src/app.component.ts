

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, DisplayOption, PivotChartService, PivotViewComponent } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';
import { Button } from '@syncfusion/ej2-buttons';
import { PdfExportProperties } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-container',
  providers: [PivotChartService],
  // specifies the template string for the pivot table component
  template: `<span><button ej-button id='chartexport'>Export</button></span><div><ejs-pivotview #pivotview id='PivotView' height='300' [dataSourceSettings]=dataSourceSettings [chartSettings]='chartSettings' [displayOption]='displayOption'></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public chartSettings?: ChartSettings;
    public displayOption?: DisplayOption;
    public exportButton?: Button;

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

        this.displayOption = { view: 'Chart' } as DisplayOption;
        this.chartSettings = {
            chartSeries: {
                type: 'Column'
            }
        } as ChartSettings;

        this.exportButton = new Button({ isPrimary: true });
        this.exportButton.appendTo('#chartexport');

        this.exportButton.element.onclick = (): void => {
            this.pivotGridObj?.chartExport('PNG', 'result' as PdfExportProperties);
        };
    }
}



