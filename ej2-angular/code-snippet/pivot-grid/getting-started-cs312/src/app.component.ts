import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'

import { Component, ViewChild, OnInit } from '@angular/core';
import { PivotView, FieldListService, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Observable } from 'rxjs';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings [gridSettings]=gridSettings
    [width]=width height=height showFieldList='true' (columnRender)='columnRender($event)'></ejs-pivotview>`
})

export class AppComponent implements OnInit {
  columnRender($event: Event) {
  }
  public width?: string;
  public height?: number;
  public dataSourceSettings?: DataSourceSettingsModel;
  public gridSettings?: GridSettings;
  public observable = new Observable();

  @ViewChild('pivotview', { static: false })
  public pivotGridObj?: PivotView;

  ngOnInit(): void {

    this.width = "100%";
    this.height = 350;

    this.gridSettings = {
      columnRender: this.observable.subscribe((args: any) => {
        for (let i = 1; i < args.columns.length; i++) {
          if (args.stackedColumns[i].customAttributes &&
            args.stackedColumns[i].customAttributes.cell.valueSort.levelName === 'FY 2016.Units Sold') {
            args.stackedColumns[i].visible = false;
          }
        }
      }) as any
    } as GridSettings;

    this.dataSourceSettings = {
      dataSource: Pivot_Data as IDataSet[],
      expandAll: false,
      enableSorting: true,
      columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
      values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
      rows: [{ name: 'Country' }, { name: 'Products' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      filters: []
    };
  }
}