


import { Component } from '@angular/core';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    // specifies the template string for the DropDownTree component
    template: `<ejs-dropdowntree id='dropdownTree' [fields]='fields'></ejs-dropdowntree>`
})

export class AppComponent {
    constructor() {

    }
     // Use data manager to get dropdown tree data from remote source
    public data: Object = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
    });
    // Set queries to filter and fetch remote data
    public query: Object = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
    public query1: Object = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
    public fields: Object = {
        dataSource: this.data, query: this.query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
        child: { dataSource: this.data, query: this.query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
    };
}



