


import { Component } from '@angular/core';
//import DataManager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete id='atcelement' [dataSource]='sportsData' [fields]='fields' [placeholder]='text' [query]='query' [filterType]='filterType' [sortOrder]='sorting'></ejs-autocomplete>`
})
export class AppComponent {
    constructor() {
    }
    //bind the DataManager instance to dataSource property
    public sportsData: DataManager = new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        });
    // maps the appropriate column to fields property
    public fields: Object = { value: 'ContactName' };
    //bind the Query instance to query property
    public query: Query = new Query().select(['ContactName', 'CustomerID']).take(6);
    //set the placeholder to AutoComplete input
    public text: string = "Find a customer";
    //set the filterType to searching operation
    public filterType: string='StartsWith';
    //sort the result items
    public sorting: string = 'Ascending';
}



