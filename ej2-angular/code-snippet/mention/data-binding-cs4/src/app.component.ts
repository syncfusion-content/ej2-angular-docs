import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MentionModule } from '@syncfusion/ej2-angular-dropdowns'




import { Component } from '@angular/core';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, MentionModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<label id="comment" >Comments</label>
  <div id="mentionElement" placeholder = "Type @ and tag user"></div>
  <ejs-mention [dataSource]='searchData' [query]='query' [fields]='fields' [popupWidth]='popupWidth' [target]='mentionTarget'></ejs-mention>`,


})
export class AppComponent {
  constructor() {}
  public searchData: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/angular/production/api/Employees',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});
  public mentionTarget: string = '#mentionElement';
  public query: Query = new Query().select(['FirstName', 'EmployeeID']).take(7).requiresCount();
  public fields: Object = { text: 'FirstName', value: 'EmployeeID' };
  public popupWidth: string = '250px';
}



