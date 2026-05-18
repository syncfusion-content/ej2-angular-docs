import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit } from '@angular/core';
import { IDataSet, FieldListService, CalculatedFieldService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  imports: [
    PivotViewAllModule,
    PivotFieldListAllModule
  ],
  standalone: true,
  selector: 'app-root',
  providers: [FieldListService, CalculatedFieldService],
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width allowCalculatedField='true' showFieldList='true'></ejs-pivotview>`
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
      filters: [],
      drilledMembers: [{ name: 'Country', items: ['France'] }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      rows: [{ name: 'Country' }, { name: 'State' }],
      values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity' }, { name: 'Total', caption: 'Total Units', type: 'CalculatedField' }],
      calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Quantity)"' }]
    };
    this.width = "100%";
  }
}