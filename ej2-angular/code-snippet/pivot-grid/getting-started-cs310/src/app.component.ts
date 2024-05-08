import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'

import { Component, ViewChild, OnInit } from '@angular/core';
import { PivotView, FieldListService, IDataSet, IDataOptions } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Grid } from '@syncfusion/ej2-grids';
import { Pivot_Data } from './datasource';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings [gridSettings]='gridSettings'
    width=width height=height showFieldList='true' (enginePopulated)='enginePopulated($event)'></ejs-pivotview>`
})

export class AppComponent implements OnInit {

  public width?: string;
  public height?: number;
  public dataSourceSettings?: IDataOptions;
  public gridSettings?: GridSettings;

  @ViewChild('pivotview', { static: false })
  public pivotGridObj?: PivotView;

  queryCellInfo(args: any): void {
    let colIndex: number = Number(args.cell.getAttribute('data-colindex'));
    let cells: any = args.data[colIndex] ? args.data[colIndex] : {};
    // Here by using 'actualText' option, a custom class can be added to the specific row header and its value to apply custom style.
    if (cells.actualText === 'Germany') {
      args.cell.classList.add('e-custom');
    } else if (cells.actualText === 'Amount' &&
      cells.columnHeaders === 'FY 2016' && cells.rowHeaders === 'Germany') {
      args.cell.classList.add('e-custom');
    }
  }
  headerCellInfo(args: any): void {
    let customAttributes: any = args.cell.column.customAttributes;
    // Here custom class can be added to the specific column header by using unique level name, to apply custom style.
    if (args.node.classList.contains('e-columnsheader') && customAttributes &&
      customAttributes.cell.valueSort.levelName === 'FY 2016.Sold Amount') {
      args.node.classList.add('e-custom');
    }
  }

  enginePopulated(args: any): void {
    ((this.pivotGridObj as PivotView).grid as Grid).queryCellInfo = this.queryCellInfo.bind(this);
    ((this.pivotGridObj as PivotView).grid as Grid).headerCellInfo = this.headerCellInfo.bind(this);
  }

  ngOnInit(): void {

    this.width = "100%";
    this.height = 350;

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

    this.gridSettings = {
      columnWidth: 140,
    } as GridSettings;
  }
}