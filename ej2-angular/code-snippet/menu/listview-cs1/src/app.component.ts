

import { Component, ViewChild } from '@angular/core';
import { enableRipple, Animation, AnimationOptions } from '@syncfusion/ej2-base';
import { ListViewComponent, SelectEventArgs } from '@syncfusion/ej2-angular-lists';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div class="layoutWrapper">
            <div class="speaker">
                <div class="camera"></div>
            </div>
            <div class="layout">
                <div id="container">
                    <div id="header">
                        <span id="hamburger" (click)="hamburgerClick()" class="e-icons menu default"></span>
                        <div class="content">Header</div>
                    </div>
                    <!-- ListView element -->
                    <ejs-listview  id="listview" #listview [dataSource]="dataSource" headerTitle="Menu" [showHeader]="true" (select)="onSelect($event)" tabindex="1" [style.display]='listViewDisplay' ></ejs-listview>
                    <span id="close" (click)="onClick($event)" class="e-icons" [style.display]='closeSpanDisplay'></span>
                </div>
            </div>
            <div class="outerButton"> </div>
        </div>`
})

export class AppComponent {
  @ViewChild('listview')
  public listObj?: ListViewComponent;
  public listViewDisplay: string = 'none';
  public closeSpanDisplay: string = 'none';

  public dataSource: { [key: string]: Object }[] = [
    {
      text: 'Appliances',
      id: 'list1',
      child: [
        {
          text: 'Kitchen',
          id: 'list1_1',
          child: [
            { id: 'list1_1_1', text: 'Electric Cookers' },
            { id: 'list1_1_2', text: 'Coffee Makers' },
            { id: 'list1_1_3', text: 'Blenders' },
          ]
        },
        {
          text: 'Washing Machine',
          id: 'list1_2',
          child: [
            { id: 'list1_2_1', text: 'Fully Automatic' },
            { id: 'list1_2_2', text: 'Semi Automatic' }
          ]
        },
        {
          text: 'Air Conditioners',
          id: 'list1_3',
          child: [
            { id: 'list1_3_1', text: 'Inverter ACs' },
            { id: 'list1_3_2', text: 'Split ACs' },
            { id: 'list1_3_3', text: 'Window ACs' },
          ]
        }
      ]
    },
    {
      text: 'Accessories',
      id: 'list2',
      child: [
        {
          text: 'Mobile',
          id: 'list2_1',
          child: [
            { id: 'list2_1_1', text: 'Headphones' },
            { id: 'list2_1_2', text: 'Memory Cards' },
            { id: 'list2_1_3', text: 'Power Banks' }
          ]
        },
        {
          text: 'Computer',
          id: 'list2_2',
          child: [
            { id: 'list2_2_1', text: 'Pendrives' },
            { id: 'list2_2_2', text: 'External Hard Disks' },
            { id: 'list2_2_3', text: 'Monitors' }
          ]
        }
      ]
    },
    {
      text: 'Fashion',
      id: 'list3',
      child: [
        { id: 'list3_1', text: 'Men' },
        { id: 'list3_2', text: 'Women' }
      ]
    },
    {
      text: 'Home & Living',
      id: 'list4',
      child: [
        { id: 'list4_1', text: 'Furniture' },
        { id: 'list4_2', text: 'Decor' }
      ]
    },
    {
      text: 'Entertainment',
      id: 'list5',
      child: [
        { id: 'list5_1', text: 'Televisions' },
        { id: 'list5_2', text: 'Home Theatres' },
        { id: 'list5_3', text: 'Gaming Laptops' }
      ]
    }
  ];

  public onSelect(e: SelectEventArgs): void {
    if (e.data && !(e.data as { child: object }).child) {
      this.listViewDisplay = 'none';
      this.closeSpanDisplay = 'none';
      this.listObj?.refresh();
    }
  }

  public onClick = (args: any): void => {
    this.listViewDisplay = 'none';
    this.closeSpanDisplay = 'none';
  };

  public hamburgerClick = () => {
    let animation: Animation = new Animation({ duration: 500 });
    animation.animate((this.listObj as ListViewComponent).element, {
      name: 'SlideDown',
      begin: (args: AnimationOptions) => {
        this.listViewDisplay = 'block';
        this.closeSpanDisplay = 'block';
      }
    });
  };
}


