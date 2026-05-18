import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit } from '@angular/core';
import { IDataSet, FieldListService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  imports: [
    PivotViewAllModule,
    PivotFieldListAllModule
  ],
  standalone: true,
  selector: 'app-root',
  providers: [FieldListService],
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width showFieldList='true'></ejs-pivotview></div>`
})

export class App implements OnInit {
  public dataSourceSettings?: DataSourceSettingsModel;
  public width?: string;
  ngOnInit(): void {
    this.dataSourceSettings = {
      dataSource: Pivot_Data as IDataSet[],
      columns: [{ name: 'Date' }, { name: 'Product' }],
      expandAll: false,
      enableSorting: true,
      filters: [],
      drilledMembers: [{ name: 'Country', items: ['France'] }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      rows: [{ name: 'Country' }, { name: 'State' }],
      values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity' }]
    };
    this.width = "100%";
  }
}