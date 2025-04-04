import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { DataManager, ODataV4Adaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
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
            adaptor: new ODataV4Adaptor,
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7',
            crossDomain: true
        });
        this.width = '100%';
        this.dataSourceSettings = {
            dataSource: this.data,
            expandAll: true,
            filters: [],
            columns: [{ name: 'OrderDate'}, { name: 'ShipCity' }],
            rows: [{ name: 'OrderID' }, { name: 'CustomerID' }],
            values: [{ name: 'Freight' }]
        };
    }
}



