import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, DisplayOption, PivotChartService, PivotViewComponent } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
    selector: 'app-container',
    providers: [PivotChartService],
    template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  [chartSettings]='chartSettings' [displayOption]='displayOption'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public pivotData?: IDataSet[];
    public dataSourceSettings?: DataSourceSettingsModel;
    public chartSettings?: ChartSettings;
    public displayOption?: DisplayOption;
    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotViewComponent;
    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year' }, { name: 'Products' }],
            rows: [{ name: 'Country' }, { name: 'Quarter' }],
            formatSettings: [{ name: 'Amount', format: 'C' }],
            values: [{ name: 'Amount' }, { name: 'Sold' }]
        };
        this.displayOption = { view: 'Chart' } as DisplayOption;
        this.chartSettings = { chartSeries: { explode: true, type: 'Pie' } } as ChartSettings;
    }
}


