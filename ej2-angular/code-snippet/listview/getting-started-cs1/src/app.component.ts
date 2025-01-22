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
    template: `<ejs-listview id='sample-list' [dataSource]='data'></ejs-listview>`
})

export class AppComponent {
    public data: Object = [
        { text: 'Artwork', id: '01' },
        { text: 'Abstract', id: '02' },
        { text: 'Modern Painting', id: '03' },
        { text: 'Ceramics', id: '04' },
        { text: 'Animation Art', id: '05' },
        { text: 'Oil Painting', id: '06' }];
}


