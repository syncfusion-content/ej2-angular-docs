


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id="sample">
        <ejs-listview id='List' [dataSource]='data' headerTitle='Contacts' cssClass='e-list-template' [showHeader]='true' sortOrder='Ascending'>
            <ng-template #template let-data="">
                <div class="e-list-wrapper e-list-multi-line e-list-avatar">
                    <span class="e-avatar e-avatar-circle" *ngIf="data.avatar !== ''">{{data.avatar}}</span>
                    <span class="{{data.pic}} e-avatar e-avatar-circle" *ngIf="data.pic !== '' "> </span>
                    <span class="e-list-item-header">{{data.text}}</span>
                    <span class="e-list-content">{{data.contact}}</span>
                </div>
            </ng-template>
        </ejs-listview>
    </div>
    `
})

export class AppComponent {
     // Listview datasource with avatar and image source fields
     public data?: { [key: string]: Object; }[] = [
  {
    text: "Jenifer",
    contact: "(206) 555-985774",
    id: "1",
    avatar: "",
    pic: "pic01"
  },
  { text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: "" },
  {
    text: "Isabella",
    contact: "(206) 555-8122",
    id: "4",
    avatar: "",
    pic: "pic02"
  },
  {
    text: "William ",
    contact: "(206) 555-9482",
    id: "5",
    avatar: "W",
    pic: ""
  },
  {
    text: "Jacob",
    contact: "(71) 555-4848",
    id: "6",
    avatar: "",
    pic: "pic04"
  },
  { text: "Matthew", contact: "(71) 555-7773", id: "7", avatar: "M", pic: "" },
  {
    text: "Oliver",
    contact: "(71) 555-5598",
    id: "8",
    avatar: "",
    pic: "pic03"
  },
  {
    text: "Charlotte",
    contact: "(206) 555-1189",
    id: "9",
    avatar: "C",
    pic: ""
  }
];

}



