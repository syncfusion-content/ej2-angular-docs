import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { Component, OnInit } from '@angular/core';
import { IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  imports: [
    PivotViewModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width></ejs-pivotview></div>`
})

export class App implements OnInit {
  public dataSourceSettings?: DataSourceSettingsModel;
  public width?: string;
  public Pivot_Data: IDataSet[] = [
    { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q1' },
    { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q2' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q3' },
    { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q4' }
  ];
  ngOnInit(): void {
    this.dataSourceSettings = {
      dataSource: this.Pivot_Data as IDataSet[],
      columns: [{ name: 'Year' }, { name: 'Quarter' }],
      expandAll: true,
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      rows: [{ name: 'Country' }, { name: 'Products' }],
      values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }]
    };
    this.width = "100%";
  }
}