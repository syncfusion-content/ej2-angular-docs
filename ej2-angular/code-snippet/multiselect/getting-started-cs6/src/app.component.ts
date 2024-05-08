import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';
//import DataManager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data'

@Component({
imports: [
        FormsModule, ReactiveFormsModule, MultiSelectModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiSelect component
    template: `<ejs-multiselect id='multiselectelement' [dataSource]='data' [fields]='fields' [placeholder]='placeholder' [query]='query' [sortOrder]='sorting'></ejs-multiselect>`
})
export class AppComponent {
    constructor() {
    }
    //bind the DataManager instance to dataSource property
    public data: DataManager = new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
    });
    // maps the appropriate column to fields property
    public fields: Object = { text: 'ContactName', value: 'CustomerID' };
    //bind the Query instance to query property
    public query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(5);
    // set placeholder to MultiSelect input element
    public placeholder: string = 'Select customers';
    //sort the result items
    public sorting: string = 'Ascending';
}



