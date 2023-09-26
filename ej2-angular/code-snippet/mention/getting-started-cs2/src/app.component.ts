


import { Component } from '@angular/core';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='searchData' [query]='query' [fields]='fields' [minLength]='minLen' [target]='mentionTarget'></ejs-mention>`,

})
export class AppComponent {
  constructor() {}
  public searchData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});
  public mentionTarget: string = '#mentionElement';
  public query: Query = new Query().select(['ContactName', 'CustomerID']).take(7);
  public fields: object = { text: 'ContactName', value: 'CustomerID' };
  public minLen: number = 3
}



