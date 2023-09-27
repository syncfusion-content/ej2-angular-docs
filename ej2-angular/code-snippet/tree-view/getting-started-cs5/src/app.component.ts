

import { Component } from '@angular/core';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data'

@Component({
    selector: 'app-container',
    // specifies the template string for the TreeView component with remote dataSource
    template: `<div id='treeparent'><ejs-treeview id='treeelement' [fields]='field'></ejs-treeview></div>`
})
export class AppComponent {
    constructor() {
    }
    //bind the DataManager instance to dataSource property
    public data: Object = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
    });
    //bind the Query instance to query property
    public query:Object = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
    public query1:Object = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
    //Map the fields
    public field:Object ={ dataSource: this.data, query: this.query, id: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID', tooltip: 'Title',
            child: { dataSource: this.data, query: this.query1, id: 'OrderID', parentID: 'EmployeeID', text: 'ShipName' }
    };
}


