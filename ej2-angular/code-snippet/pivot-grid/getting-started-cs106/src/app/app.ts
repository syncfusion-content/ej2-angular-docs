import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit } from '@angular/core';
import { IDataSet, GroupingBarService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  imports: [
    PivotViewAllModule,
    PivotFieldListAllModule
  ],
  standalone: true,
  selector: 'app-root',
  providers: [GroupingBarService],
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width showGroupingBar='true'></ejs-pivotview>`
})

export class App implements OnInit {
  public dataSourceSettings?: DataSourceSettingsModel;
  public width?: string;
  ngOnInit(): void {
    this.dataSourceSettings = {
      dataSource: Pivot_Data as IDataSet[],
      expandAll: false,
      enableSorting: true,
      columns: [{ name: 'Date' }, { name: 'Product' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      rows: [{ name: 'Country' }, { name: 'State' }],
      values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity' }]
    };
    this.width = "100%";
  }
}