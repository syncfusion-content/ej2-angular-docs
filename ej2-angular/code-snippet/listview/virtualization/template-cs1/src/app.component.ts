import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ListViewModule, VirtualizationService } from '@syncfusion/ej2-angular-lists'
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [
    ListViewModule, NgIf
  ],

  providers: [VirtualizationService],
  standalone: true,
  selector: 'my-app',
  template: `<ejs-listview
    id="ui-list"
    #listviewInstance
    [dataSource]="listData"
    [cssClass]="cssClass"
    [enableVirtualization]="true"
    headerTitle="Contacts"
    [fields]="fields"
    height="500"
    [template]="template"
    [showHeader]="true"
  >
    <ng-template #template let-data>
      <div class="e-list-wrapper e-list-avatar">
        <span
          *ngIf="!data.imgUrl"
          class="e-avatar e-avatar-circle {{ data.icon }} showUI"
          >{{ data.icon }}</span
        >
        <img
          *ngIf="data.imgUrl"
          class="e-avatar e-avatar-circle showUI"
          src="{{ data.imgUrl }}"
          alt="{{ data.altText }}"
        />
        <span class="e-list-content">{{ data.name }}</span>
      </div>
    </ng-template>
  </ejs-listview>`
})

export class AppComponent {
  public cssClass: string = 'e-list-template';
  constructor() { }

  public listData: { [key: string]: string | object }[] = [
    { name: 'Nancy', icon: 'N', imgUrl: '', id: '0' },
    { name: 'Andrew', icon: 'A', imgUrl: '', id: '1' },
    { name: 'Janet', icon: 'J', imgUrl: '', id: '2' },
    {
      name: 'Margaret',
      icon: '',
      imgUrl: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png',
      id: '3',
    },
    { name: 'Steven', icon: 'S', imgUrl: '', id: '4' },
    {
      name: 'Laura',
      icon: '',
      imgUrl: 'https://ej2.syncfusion.com/demos/src/grid/images/3.png',
      id: '5',
    },
    { name: 'Robert', icon: 'R', imgUrl: '', id: '6' },
    { name: 'Michael', icon: 'M', imgUrl: '', id: '7' },
    {
      name: 'Albert',
      icon: '',
      imgUrl: 'https://ej2.syncfusion.com/demos/src/grid/images/5.png',
      id: '8',
    },
    { name: 'Nolan', icon: 'N', imgUrl: '', id: '9' },
  ];

  public ngOnInit() {
    for (let i: number = 10; i <= 1010; i++) {
      let index: number = parseInt((Math.random() * 10).toString());

      this.listData.push({
        name: (this.listData[index] as any).name,
        icon: (this.listData[index] as any).icon,
        imgUrl: (this.listData[index] as any).imgUrl,
        id: i.toString(),
      });
    }
  }
  public fields: Object = { text: 'name' };

}
