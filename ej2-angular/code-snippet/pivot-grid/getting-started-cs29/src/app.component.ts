import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { DataManager, ODataV4Adaptor, WebApiAdaptor, Query, ReturnOption, ODataAdaptor } from '@syncfusion/ej2-data';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: DataSourceSettingsModel;
  public data?: DataManager;
  public width?: string;

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
      adaptor: new ODataV4Adaptor(),
      crossDomain: true
    });
    this.data.defaultQuery = new Query().take(10);
    this.width = '100%';
    this.dataSourceSettings = {
      dataSource: this.data,
      expandAll: false,
      columns: [{ name: 'CustomerID', caption: 'Customer ID' }],
      rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
      values: [{ name: 'Freight' }]
    };
  }
}



