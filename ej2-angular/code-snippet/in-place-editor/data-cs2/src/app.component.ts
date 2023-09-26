

import { Component } from '@angular/core';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
            <span class="content-title"> Select customer name: </span>
            <ejs-inplaceeditor id="element" mode="Inline" type="DropDownList" value="Maria Anders" [model]="model"></ejs-inplaceeditor>
    </div>
    `
})

export class AppComponent {
    public fields: object = { text: 'ContactName', value: 'CustomerID' };
    public dataSource: DataManager = new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        });
    public query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
    public model: object = { dataSource: this.dataSource, placeholder: 'Select a customer', query: this.query, fields: this.fields };
}


