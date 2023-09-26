

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { csvdata } from './datasource';

@Component({
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public width?: string;

  ngOnInit(): void {

    this.dataSourceSettings = {
      dataSource: this.getCSVData(),
      type: 'CSV',
      expandAll: false,
      enableSorting: true,
      // tslint:disable-next-line:max-line-length
      formatSettings: [{ name: 'Total Cost', format: 'C0' }, { name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
      drilledMembers: [{ name: 'Item Type', items: ['Baby Food'] }],
      rows: [
        { name: 'Region' },
        { name: 'Country' }
      ],
      columns: [
        { name: 'Item Type' },
        { name: 'Sales Channel' }
      ],
      values: [
        { name: 'Total Cost' },
        { name: 'Total Revenue' },
        { name: 'Total Profit' }
      ],
      filters: []
    };

    this.width = '100%';
  }
  getCSVData(): string[][] {
    const dataSource: string[][] = [];
    const jsonObject: string[] = csvdata.split(/\r?\n|\r/);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < jsonObject.length; i++) {
      if (!isNullOrUndefined(jsonObject[i]) && jsonObject[i] !== '') {
        dataSource.push(jsonObject[i].split(','));
      }
    }
    return dataSource;
  }
}



