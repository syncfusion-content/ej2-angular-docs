


import { Component } from '@angular/core';
import { DataManager,ODataV4Adaptor,Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: `<ejs-listbox [dataSource]="data" [fields]="setfield" [query]="query"></ejs-listbox>`
})

export class AppComponent {
    public data:DataManager = new DataManager({
          url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
           adaptor: new ODataV4Adaptor,
    })
    public query = new Query().from('Products').select('ProductID,ProductName').take(10);

    public setfield = { text: "ProductName" }
}


