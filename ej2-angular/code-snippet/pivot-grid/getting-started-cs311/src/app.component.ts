import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'

import { Component, ViewChild, OnInit } from '@angular/core';
import { PivotView, FieldListService, IDataSet, IAxisSet } from '@syncfusion/ej2-angular-pivotview';
import { Tooltip } from '@syncfusion/ej2-popups';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

let headerTooltip: Tooltip;

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings (dataBound)="dataBound($event)"
    [width]=width height=height showFieldList='true'></ejs-pivotview>`
})

export class AppComponent implements OnInit {

  public width?: string;
  public height?: number;
  public dataSourceSettings?: DataSourceSettingsModel;
  @ViewChild('pivotview', { static: false })
  public pivotGridObj?: any;


  dataBound(args: any): void {
    if (!headerTooltip) {
      headerTooltip = new Tooltip({
        target: 'td.e-rowsheader,th.e-columnsheader', beforeRender: this.beforeRender.bind(this)
      });
      headerTooltip.appendTo(this.pivotGridObj?.element);
    }
  }

  beforeRender(args: any) {
    if (args.target.parentElement.querySelector('.e-rowsheader')) {
      // Here you can set custom content for row header(s) tooltip from its cell information.
      let index: number = Number(args.target.getAttributeNode('index').value);
      let colIndex: number = Number(args.target.getAttributeNode('data-colindex').value);
      let cell: IAxisSet = this.pivotGridObj?.engineModule.pivotValues[index][colIndex];
      let valueText: any = cell.valueSort ? cell.valueSort : '';
      if (cell.formattedText !== 'Grand Total') {
        headerTooltip.content =
          '<div>' +
          'FieldName: ' +
          valueText.axis +
          '</br>' +
          'Text: ' +
          cell.formattedText +
          '</div>';
      } else {
        headerTooltip.content =
          '<div>' +
          'FieldName: ' +
          valueText.uniqueName +
          '</br>' +
          'Text: ' +
          cell.formattedText +
          '</div>';
      }
    } else {
      // Here you can set custom content for column header(s) tooltip from its cell information.
      if (args.target.querySelector('.e-cellvalue')) {
        headerTooltip.content = args.target.querySelector('.e-cellvalue').innerText;
      } else if (args.target.querySelector('.e-headertext')) {
        headerTooltip.content = args.target.querySelector('.e-headertext').innerText;
      } else if (args.target.querySelector('.e-stackedheadercelldiv')) {
        headerTooltip.content = args.target.querySelector('.e-stackedheadercelldiv').innerText;
      } else {
        headerTooltip.content = '';
      }
    }
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
  }
}