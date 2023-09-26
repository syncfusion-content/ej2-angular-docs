


import { Component } from '@angular/core';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='searchData' [query]='query' [fields]='fields' [target]='mentionTarget' popupWidth='250px'>
    <ng-template #spinnerTemplate>
        <div class="spinner_loader"></div>
    </ng-template>
    </ejs-mention>`,

})
export class AppComponent {
  constructor() {}
  public searchData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});
  public mentionTarget: string = '#mentionElement';
  public query: Query = new Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(26);
  public fields: object =  { text: 'FirstName', value: 'EmployeeID' };
  public sortOrder: string = 'Ascending';
  public spinnerTemplate:any = '<div class="spinner_loader"></div>'
}



