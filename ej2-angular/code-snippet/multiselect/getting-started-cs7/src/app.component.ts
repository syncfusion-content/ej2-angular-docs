import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';
import { FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { DataManager,Query } from '@syncfusion/ej2-data';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, MultiSelectModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiSelect component
    template: `<ejs-multiselect id='multiselectelement' [dataSource]='searchData' [fields]='fields' [allowFiltering]='true' [placeholder]='placeholder' (filtering)='onFiltering($event)'></ejs-multiselect>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public searchData: { [key: string]: Object }[] = [
    { index: "s1", country: "Alaska" }, { index: "s2", country: "California" },
    { index: "s3", country: "Florida" }, { index: "s4", country: "Georgia" }
    ];
    // map the appropriate column
    public fields: Object = { text: "country", value: "index" };
    // set the placeholder to the MultiSelect input
    public placeholder: string = 'Select countries';
    //Bind the filter event
    public onFiltering: EmitType<FilteringEventArgs> = (e: FilteringEventArgs) => {
        
        e.preventDefaultAction = true; // Prevent the default built-in filter.

        let query = new Query();

        //frame the query based on search string with filter type.
        query = (e.text != "") ? query.where("country", "startswith", e.text, true) : query;

        //pass the filter data source, filter query to updateData method.
        e.updateData(this.searchData, query);
    };
}



