

import { Component } from '@angular/core';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    // specifies the template string for the ComboBox component
    template: `<ejs-combobox id='comboelement' #samples [dataSource]='data' [query]='query' [fields]='fields' [placeholder]='text' popupHeight='250px' [sortOrder]='sorting' [allowFiltering]='true' (filtering)='onFiltering($event)'></ejs-combobox>`
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
    public query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(7);
    // maps the appropriate column to fields property
    public fields: Object = { text: 'ContactName', value: 'CustomerID' };
    // set the placeholder to the ComboBox input
    public text: string = "Select a customer";
    //sort the result items
    public sorting: string = 'Ascending';
    //Bind the filter event
    public onFiltering: EmitType<FilteringEventArgs>  =  (e: FilteringEventArgs) => {
        // load overall data when search key empty.
        if (e.text === '') {
            e.updateData(this.data);
        } else {
          let query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']);
          // change the type of filtering
          query = (e.text !== '') ? query.where('ContactName', 'endswith', e.text, true) : query;
          e.updateData(this.data, query);
        }
    };
}


