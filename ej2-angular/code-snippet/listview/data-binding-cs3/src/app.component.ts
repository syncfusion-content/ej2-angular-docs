import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ListViewModule } from '@syncfusion/ej2-angular-lists'




import { Component } from '@angular/core';
//import DataManager related classes
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        ListViewModule
    ],


standalone: true,
    selector: 'my-app',
    template: `<ejs-listview id='sample-list' [dataSource]='data' [query]='query' [fields]='fields' [showHeader]='true' [headerTitle]='headertitle'></ejs-listview>`,
})

export class AppComponent {
    public data: Object = new DataManager({
        url: '//js.syncfusion.com/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
    });
    public query = new Query().from('Products').select('ProductID,ProductName').take(6);
    public fields: Object = { id: 'ProductID', text: 'ProductName'  };
    public headertitle = 'Product Name';
}



