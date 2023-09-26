


import { Component } from '@angular/core';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='searchData' [query]='query' [fields]='fields' [popupWidth]='popupWidth' [target]='mentionTarget'></ejs-mention>`,


})
export class AppComponent {
  constructor() {}
  public searchData: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});
  public mentionTarget: string = '#mentionElement';
  public query: Query = new Query().select(['FirstName', 'EmployeeID']).take(7);
  public fields: Object = { text: 'FirstName', value: 'EmployeeID' };
  public popupWidth: string = '250px';
}



