

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { DataManager, WebApiAdaptor, Query, ReturnOption, ODataAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public data?: DataManager;
  public width?: string;

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders',
      adaptor: new ODataAdaptor(),
      crossDomain: true
    });
    this.data.defaultQuery = new Query().take(2);
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



