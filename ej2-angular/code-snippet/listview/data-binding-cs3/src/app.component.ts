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
        url: 'https://services.syncfusion.com/angular/production/api/',
        crossDomain: true
    });
    public query = new Query().from('ListView').select('EmployeeID,FirstName').take(10);
    public fields: Object = { id: 'EmployeeID', text: 'FirstName' };
    public headertitle = 'Employees';
}


