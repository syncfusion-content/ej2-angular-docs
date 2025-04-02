import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'

import { Component, OnInit, ViewChild } from '@angular/core';
import { PivotView, FieldListService, IDataSet, DisplayOption,PivotChartService } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';
import { Button } from '@syncfusion/ej2-buttons';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
    selector: 'app-container',
    providers: [FieldListService, PivotChartService],
    template: `<div class="col-md-2"><button ej-button id='print'>Print</button></div>
    <div class="col-md-8"><ejs-pivotview #pivotview id='PivotView' height=height [dataSourceSettings]=dataSourceSettings 
    [displayOption]='displayOption' [chartSettings]='chartSettings' [width]=width></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {

    public width?: string;
    public height?: number;
    public dataSourceSettings?: DataSourceSettingsModel;
    public button?: Button;
    public displayOption?: DisplayOption;
    public chartSettings?: ChartSettings;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    ngOnInit(): void {

        this.width = "100%";
        this.height = 350;
        this.displayOption = { view: 'Chart' } as DisplayOption;
        this.chartSettings = { chartSeries: { type: 'Column' }} as ChartSettings;
        this.dataSourceSettings = {
            expandAll: false,
            dataSource: Pivot_Data as IDataSet[],
            columns: [{ name: 'Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold' }, { name: 'Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }]
        };
        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#print');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.chart.print();
        };
    }
}
