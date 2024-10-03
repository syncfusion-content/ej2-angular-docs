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
    
  public dotVariants: TimelineItemModel[] = [
    { content: 'Filled', cssClass: 'dot-filled' },
    { content: 'Flat', cssClass: 'dot-flat' },
    { content: 'Outlined', cssClass: 'dot-outlined' }
  ];

}


