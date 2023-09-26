

import { Component } from '@angular/core';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    // specifies the template string for the ComboBox component with change event
    template: `<ejs-combobox id='comboelement' #samples [dataSource]='data' [fields]='fields' [placeholder]='text' [allowFiltering]='true' (filtering)='onFiltering($event)'></ejs-combobox>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: { [key: string]: Object }[] = [
        { Id: "s3", Country: "Alaska" },
        { Id: "s1", Country: "California" },
        { Id: "s2", Country: "Florida" },
        { Id: "s4", Country: "Georgia" }];
    // maps the appropriate column to fields property
    public fields: Object = { text: "Country", value: "Id" };
    // set the placeholder to the ComboBox input
    public text: string = "Select a country";
    //Bind the filter event
    public onFiltering: EmitType<FilteringEventArgs>  =  (e: FilteringEventArgs) => {
        let query = new Query();
        //frame the query based on search string with filter type.
        query = (e.text != "") ? query.where("Country", "startswith", e.text, true) : query;
        //pass the filter data source, filter query to updateData method.
        e.updateData(this.data, query);
    };
}


