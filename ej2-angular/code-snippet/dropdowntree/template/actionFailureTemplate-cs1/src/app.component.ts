import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DropDownTreeComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  imports: [
    FormsModule, ReactiveFormsModule, ButtonModule, DropDownTreeModule
  ],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-dropdowntree id='dropdownTree' [placeholder]='placeholder' [fields]='field' [actionFailureTemplate]='actionFailureTemplate'></ejs-dropdowntree>`
})

export class AppComponent {
  public data: Object = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svs',
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
  });
  public query: Object = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
  public query1: Object = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
  public field: Object = {
    dataSource: this.data, query: this.query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
    child: { dataSource: this.data, query: this.query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
  };
  public actionFailureTemplate: Object = '<span class="action-failure"> Data fetch request fails<span>';
  public placeholder: string = 'Select an employee';
}

