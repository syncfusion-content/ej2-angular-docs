

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public width?: string;

  ngOnInit(): void {
    this.width = '100%';
    this.dataSourceSettings = {
      url: 'https://cdn.syncfusion.com/data/sales-analysis.json',
      expandAll: false,
      rows: [
        { name: 'EnerType', caption: 'Energy Type' }
      ],
      columns: [
        { name: 'EneSource', caption: 'Energy Source' }
      ],
      values: [
        { name: 'PowUnits', caption: 'Units (GWh)' },
        { name: 'ProCost', caption: 'Cost (MM)' }
      ],
      filters: []
    };
  }
}




