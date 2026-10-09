import { Component } from '@angular/core';
import {
  CalculatedFieldService,
  FieldListService,
  GroupingBarService,
  IDataSet,
  PivotViewAllModule
} from '@syncfusion/ej2-angular-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [PivotViewAllModule],
  providers: [GroupingBarService, FieldListService, CalculatedFieldService],
  template: `
    <ejs-pivotview
      id="PivotView"
      height="350"
      width="100%"
      [dataSourceSettings]="dataSourceSettings"
      [showGroupingBar]="true"
      [showFieldList]="true"
      [allowCalculatedField]="true">
    </ejs-pivotview>
  `
})
export class AppComponent {
  public dataSourceSettings: DataSourceSettingsModel = {
    dataSource: [
      { Country: 'France', Product: 'Mountain Bikes', Sold: 31, Amount: 52824 },
      { Country: 'France', Product: 'Road Bikes', Sold: 25, Amount: 42600 },
      { Country: 'Germany', Product: 'Mountain Bikes', Sold: 51, Amount: 86904 },
      { Country: 'Germany', Product: 'Road Bikes', Sold: 90, Amount: 153360 }
    ] as IDataSet[],
    rows: [{ name: 'Country' }],
    columns: [{ name: 'Product' }],
    values: [{ name: 'Amount', caption: 'Sales Amount' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }]
  };
}
