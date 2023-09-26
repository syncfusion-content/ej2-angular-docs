


import { Component } from '@angular/core';
//import data manager related classes
import { Query, Predicate, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    // specifies the template url path
    templateUrl: 'groupTemplate.html'
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
    // form  predicate to fetch the grouped data
    public groupPredicate = new Predicate('City', 'equal','london').or('City','equal','seattle');
    // maps the appropriate column to fields property
    public fields: Object = { value: 'FirstName', groupBy:'City' };
    //bind the Query instance to query property
    public query: Query = new Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(6).where(this.groupPredicate);
    //set the placeholder to AutoComplete input
    public text: string = "Find an employee";
    //sort the result items
    public sorting: string = 'Ascending';
}



