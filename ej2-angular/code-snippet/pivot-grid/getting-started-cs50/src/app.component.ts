import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component } from '@angular/core';
import { IDataSet, PivotView, DisplayOption, DrillThroughService, PivotChartService } from '@syncfusion/ej2-angular-pivotview';
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
  providers: [DrillThroughService, PivotChartService],
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [chartSettings]='chartSettings' [displayOption]='displayOption' allowDrillThrough='true' [width]=width></ejs-pivotview>`
})

export class AppComponent {

    public width?: string;
    public dataSourceSettings?: DataSourceSettingsModel;
    public chartSettings?: ChartSettings;
    public displayOption?: DisplayOption;

    ngOnInit(): void {

        this.width = "100%";

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
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



