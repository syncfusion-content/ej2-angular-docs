import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id="letterAvatarList">
        <ejs-listview id='letterAvatarList' [dataSource]='dataSource' [headerTitle]='headerTitle' [showHeader]='true' [sortOrder]='sortOrder'>
            <ng-template #template let-dataSource="">
                <div class="listWrapper">
                    <span class="e-avatar e-avatar-small e-avatar-circle {{dataSource.color}}" *ngIf="dataSource.avatar !== ''">{{dataSource.avatar}}</span>
                    <span class="{{dataSource.pic}} e-avatar e-avatar-small e-avatar-circle" *ngIf="dataSource.pic !== '' "> </span>
                    <span class="text">{{dataSource.text}}</span>
                </div>
            </ng-template>
        </ejs-listview>
    </div>
    `
})

export class AppComponent { 
     // Listview datasource with avatar and image source fields
     public dataSource?: { [key: string]: Object; }[] = [
        { id: 's_01', text: 'Robert', avatar: '', pic: 'pic04', color: '' },
        { id: 's_02', text: 'Nancy', avatar: 'N', pic: '', color: 'green' },
        { id: 's_05', text: 'John', pic: 'pic01', avatar: '', color: '' },
        { id: 's_03', text: 'Andrew', avatar: 'A', pic: '', color: 'blue' },
        { id: 's_06', text: 'Michael', pic: 'pic02', avatar: '', color: '' },
        { id: 's_07', text: 'Steven', pic: 'pic03', avatar: '', color: '' },
        { id: 's_08', text: 'Margaret', avatar: 'M', pic: '', color: 'red' }
    ];

    public headerTitle: string = 'Contacts';
    public sortOrder: string = 'Ascending';
}




