

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public data?: DataManager;
  public width?: string;

  ngOnInit(): void {

    this.data = new DataManager({
      json: Pivot_Data,
      // tslint:disable-next-line:new-parens
      adaptor: new JsonAdaptor
    });

    this.dataSourceSettings = {
      dataSource: this.data,
      expandAll: false,
      drilledMembers: [{ name: 'Country', items: ['France'] }],
      columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
      values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
      rows: [{ name: 'Country' }, { name: 'Products' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      filters: []
    };
    this.width = '100%';
  }
}



