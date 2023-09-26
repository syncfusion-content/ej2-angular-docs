


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-listview id='ui-list' [dataSource]='listData' [enableVirtualization]='true' [height]=500 headerTitle='Contacts' [showHeader]='true'>
    <ng-template #template let-data="">
        <div class="list-container">
        <div id="icon" *ngIf="data.icon !== ''" class={{data.icon}}>
            <span class="showUI">{{data.icon}}</span>
            <img class="hideUI" width = '45' height = '45' src={{data.imgUrl}} />
        </div>
        <div id="icon" *ngIf="data.imgUrl !== ''" class="img">
            <span class="hideUI">{{data.icon}}</span>
            <img class="showUI" width = '45' height = '45' src={{data.imgUrl}} />
        </div>
        <div class="name">{{data.name}}</div>
        </div>
  </ng-template>
  </ejs-listview>`
})

export class AppComponent {
   public listData: { [key: string]: string | object }[] = [
    { name: 'Nancy', icon: 'N', imgUrl:'', id: '0', },
    { name: 'Andrew', icon: 'A', imgUrl:'', id: '1' },
    { name: 'Janet', icon: 'J', imgUrl:'', id: '2' },
    { name: 'Margaret', icon: '', imgUrl: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', id: '3' },
    { name: 'Steven', icon: 'S', imgUrl:'', id: '4' },
    { name: 'Laura', icon: '', imgUrl: 'https://ej2.syncfusion.com/demos/src/grid/images/3.png', id: '5' },
    { name: 'Robert', icon: 'R', imgUrl:'', id: '6' },
    { name: 'Michael', icon: 'M', imgUrl:'', id: '7' },
    { name: 'Albert', icon: '', imgUrl: 'https://ej2.syncfusion.com/demos/src/grid/images/5.png', id: '8' },
    { name: 'Nolan', icon: 'N', imgUrl:'', id: '9' }
];

public ngOnInit() {
    for (let i: number = 10; i <= 1010; i++) {
        let index: number = parseInt((Math.random() * 10).toString());
        this.listData.push({ name: (this.listData[index] as any).name, icon: (this.listData[index] as any).icon, imgUrl: (this.listData[index] as any).imgUrl, id: i.toString() });
    }
}
}



