import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { DataManager, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
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
      url: 'https://services.syncfusion.com/js/production/api/Orders',
      adaptor: new ODataAdaptor,
      crossDomain: true
    })
    this.dataSourceSettings = {
      dataSource: this.data,
      expandAll: true,
      filters: [],
      columns: [{ name: 'OrderDate' }, { name: 'ShipCity' }],
      rows: [{ name: 'OrderID' }, { name: 'CustomerID' }],
      values: [{ name: 'Freight' }]
    }
    this.width = '100%';
  }
}



