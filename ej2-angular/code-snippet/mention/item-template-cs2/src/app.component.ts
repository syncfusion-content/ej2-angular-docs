


import { Component } from '@angular/core';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='dataSource' [query]='query' [fields]='fields' [target]='mentionTarget' [sortOrder]='sortOrder' popupWidth='250px'>
      <ng-template #itemTemplate let-data>
          <span><span>{{data.FirstName}}</span><span class ='city'>{{data.City}}</span></span>
      </ng-template>
      <ng-template #displayTemplate let-data>
          <span>{{data.FirstName}} - {{data.City}}</span>
      </ng-template>
  </ejs-mention>`,

})
export class AppComponent {
  constructor() {}
  public dataSource: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});
  public mentionTarget: string = '#mentionElement';
  public query: Query = new Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(6);
  public fields: object =  { text: 'FirstName', value: 'EmployeeID' };
  public sortOrder: string = 'Ascending';
  public itemTemplate: any = "<span><span>${FirstName}</span><span class ='city'>${City}</span></span>";
  public displayTemplate: any = "<span>${FirstName} - ${City}</span>"
}



