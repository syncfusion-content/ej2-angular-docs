


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-listview id='ui-list' [dataSource]='listData' [enableVirtualization]='true' ></ejs-listview>`
})

export class AppComponent {
    public listData: { [key: string]: string | object }[] = [
        { text: 'Nancy', id: '0', },
        { text: 'Andrew', id: '1' },
        { text: 'Janet', id: '2' },
        { text: 'Margaret', id: '3' },
        { text: 'Steven', id: '4' },
        { text: 'Laura', id: '5' },
        { text: 'Robert', id: '6' },
        { text: 'Michael', id: '7' },
        { text: 'Albert', id: '8' },
        { text: 'Nolan', id: '9' }
    ];

    public ngOnInit() {
        for (let i: number = 10; i <= 1010; i++) {
            let index: number = parseInt((Math.random() * 10).toString());
            this.listData.push({ text: (this.listData[index] as any).text, id: i.toString() });
        }
    }
}



