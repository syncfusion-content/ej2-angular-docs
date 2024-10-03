import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


import { Component } from '@angular/core';
import { TimelineItemModel, TimelineModule, TimelineAllModule } from "@syncfusion/ej2-angular-layouts";

@Component({
imports: [ TimelineModule, TimelineAllModule ],


standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    
  public orderStatus: TimelineItemModel[] = [
    { content: 'Shipped'},
    { content: 'Departed'},
    { content: 'Arrived'},
    { content: 'Out for Delivery'}
  ];

}


