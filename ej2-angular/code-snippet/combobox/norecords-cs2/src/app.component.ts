


import { Component } from '@angular/core';
//import data manager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    // specifies the template string for the ComboBox component
    template:  `<ejs-combobox id='comboelement' [dataSource]='data' [query]='query' [fields]='fields'      placeholder='Find an employee'>
                    <ng-template #actionFailureTemplate>
                        <span class='action-failure'> Data fetch get fails</span>
                    </ng-template>
                 </ejs-combobox>`
})
export class AppComponent {
    //bind the data manager instance to dataSource property
    public data: DataManager = new DataManager({
            // Here, use the wrong url to display the action failure template
            url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
    });
    //bind the Query instance to query property
    public query: Query =  new Query().from('Employees').select(['FirstName']).take(6);

    // maps the appropriate column to fields property
    public fields: Object =  { text: 'FirstName', value: 'EmployeeID' };
}



