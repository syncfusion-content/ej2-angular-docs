import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ListViewModule } from '@syncfusion/ej2-angular-lists'
import { Component } from '@angular/core';

@Component({
    imports: [
        ListViewModule
    ],
    standalone: true,
    selector: 'my-app',
    template: `<ejs-listview id='sample-list' [dataSource]='data' [fields]='fields' ></ejs-listview>`
})

export class AppComponent {
    public data: Object = [
        {
            'text': 'Audi A4',
            'id': '9bdb',
            'category': 'Audi'
        },
        {
            'text': 'Audi A5',
            'id': '4589',
            'category': 'Audi'
        },
        {
            'text': 'BMW 501',
            'id': 'f849',
            'category': 'BMW'
        },
        {
            'text': 'BMW 502',
            'id': '7aff',
            'category': 'BMW'
        }
    ];
    public fields: Object = { groupBy: 'category', tooltip: 'text' };
}



