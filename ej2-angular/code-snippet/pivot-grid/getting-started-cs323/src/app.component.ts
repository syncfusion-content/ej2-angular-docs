import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'

import { Component, OnInit } from '@angular/core';
import {
  IDataSet,
  DisplayOption,
  PivotChartService
} from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { Observable } from 'rxjs';
@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [PivotChartService],
  template: `<ejs-pivotview #pivotview id='PivotView' width='90%' height='350' [dataSourceSettings]=dataSourceSettings
  [chartSettings]='chartSettings' [displayOption]='displayOption'></ejs-pivotview>`,
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: DataSourceSettingsModel;
  public chartSettings?: ChartSettings;
  public displayOption?: DisplayOption;
  public observable = new Observable();
  ngOnInit(): void {
    this.dataSourceSettings = {
      dataSource: Pivot_Data as IDataSet[],
      expandAll: false,
      columns: [{ name: 'Year', caption: 'Production Year' }],
      values: [{ name: 'Sold', caption: 'Units Sold' }],
      rows: [{ name: 'Country' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      filters: [],
    };

    this.displayOption = { view: 'Chart' } as DisplayOption;

    this.chartSettings = {
      chartSeries: { type: 'Column' },
      multiLevelLabelRender: this.observable.subscribe((args:any): void => {
        // Here we customized the appearance of the labels.
        args.textStyle.size = '18px';
        args.textStyle.color = 'red';
        // Here, we have customized both the content and the position of the specific label, in this case, France.
        if (args.text.startsWith('France')) {
            args.text = 'Custom label';
            args.alignment = 'Far';
        }
     }) as any,
  } as ChartSettings;
  }
}