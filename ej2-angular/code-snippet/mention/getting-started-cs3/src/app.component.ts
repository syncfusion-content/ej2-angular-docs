import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MentionModule } from '@syncfusion/ej2-angular-dropdowns'




import { Component } from '@angular/core';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, MentionModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='searchData' [query]='query' [fields]='fields' [filterType]='filterType' [target]='mentionTarget'></ejs-mention>`,

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
  public fields: Object = { text: 'ContactName', value: 'CustomerID' };
  public filterType: string = 'EndsWith'
}



