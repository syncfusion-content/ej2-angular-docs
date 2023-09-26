


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-listview id='sample-list' [dataSource]='data' [fields]='fields' [showCheckBox]='true' headerTitle='To Do List' showHeader='true'></ejs-listview>`,
})

export class AppComponent {
    public data: Object = [
        {text: 'Do Meditation', id: '1'},
        {text: 'Go Jogging', id: '2'},
        {text: 'Buy Groceries', id: '3'},
        {text: 'Pay Phone bill', id: '4'},
        {text: 'Play Football with your friends', id: '5'},
    ];

    public fields: Object = { text: 'text', id:'id' };
}



