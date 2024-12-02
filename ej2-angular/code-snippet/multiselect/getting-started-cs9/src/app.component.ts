import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';
import { FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, MultiSelectModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiSelect component
    template: `<ejs-multiselect id='multiselectelement' [dataSource]='searchData' [fields]='fields' [allowFiltering]='true' [placeholder]='placeholder' [sortOrder]='sorting'[query]='query' (filtering)='onFiltering($event)'></ejs-multiselect>`
})
export class AppComponent {
    constructor() {
    }
    //bind the DataManager instance to dataSource property
    public searchData: DataManager = new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
    });
    // map the appropriate column
    public fields: Object = { text: 'ContactName', value: 'CustomerID' };
    //bind the Query instance to query property
    public query: Query = new Query().select(['ContactName', 'CustomerID']).take(7);
    // set the placeholder to the MultiSelect input
    public placeholder: string = 'Select names';
    //sort the resulted items
    public sorting: string = 'Ascending';
    //Bind the filter event
    public onFiltering: EmitType<FilteringEventArgs> = (e: FilteringEventArgs) => {

        e.preventDefaultAction = true; // Prevent the default built-in filter.

        // load overall data when search key empty.
        if(e.text == '') e.updateData(this.searchData);
        else{
          let query: Query = new Query().select(['ContactName', 'CustomerID']);
          // change the type of filtering
          query = (e.text !== '') ? query.where('ContactName', 'endswith', e.text, true) : query;
          e.updateData(this.searchData, query);
        }
    };
}



