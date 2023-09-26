


import { Component } from '@angular/core';
import { Query, DataManager,Predicate } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete id='ddlelement' #samples [dataSource]='searchData' [fields]='fields' [placeholder]='text' [itemTemplate]="itemTemplate" [query]='query'(filtering)="onFiltering($event)"></ejs-autocomplete> `
})

export class AppComponent {
query: any;
    constructor() {
    }
    // defined the array of data
    public searchData: { [key: string]: Object }[] = [
    { Name: 'Australia', Code: 'AU' },
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' },
    { Name: 'Denmark', Code: 'DK' },
    { Name: 'France', Code: 'FR' },
    { Name: 'Finland', Code: 'FI' },
    { Name: 'Germany', Code: 'DE' },
    { Name: 'Greenland', Code: 'GL' },
    { Name: 'Hong Kong', Code: 'HK' },
    { Name: 'India', Code: 'IN' },
    { Name: 'Italy', Code: 'IT' },
    { Name: 'Japan', Code: 'JP' },
    { Name: 'Mexico', Code: 'MX' },
    { Name: 'Norway', Code: 'NO' },
    { Name: 'Poland', Code: 'PL' },
    { Name: 'Switzerland', Code: 'CH' },
    { Name: 'United Kingdom', Code: 'GB' },
    { Name: 'United States', Code: 'US' }];
    // maps the appropriate column to fields property
    public fields: Object = { value: "Code" , text:"Name"};
    // set the placeholder to the AutoComplete input
    public text: string = "Find a country";
    public itemTemplate:string= "<span><span class='name'>${Name}</span>-<span class ='code'>${Code}</span></span>";
    public onFiltering (e : any)
    {
      e.preventDefaultAction=true;
           var predicate = new Predicate('Name', 'contains', e.text);
               predicate = predicate.or('Code', 'contains', e.text);
            var query = new Query();
        //frame the query based on search string with filter type.
          query = (e.text != "") ? query.where(predicate) : query;
        //pass the filter data source, filter query to updateData method.
          e.updateData(this.searchData, query);
    }
}



