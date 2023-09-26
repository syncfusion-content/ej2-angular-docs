


import { Component } from '@angular/core';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { FieldSettingsModel } from '@syncfusion/ej2-dropdowns';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='searchData' [query]='query' [fields]='fields' [popupWidth]='popupWidth' [target]='mentionTarget'></ejs-mention>`,


})
export class AppComponent {
  constructor() {}
  public searchData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});
  public mentionTarget: string = '#mentionElement';
  public query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
  public fields: Object = { text: 'ContactName', value: 'CustomerID' };
  public popupWidth:string = '250px'
}



