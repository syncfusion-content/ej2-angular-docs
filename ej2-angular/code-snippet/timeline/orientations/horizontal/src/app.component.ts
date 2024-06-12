import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


import { Component } from '@angular/core';
import { TimelineItemModel } from "@syncfusion/ej2-angular-layouts";

@Component({
imports: [ TimelineModule, TimelineAllModule ],


standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent  {

    public tripItenerary: TimelineItemModel[] = [
      { content: 'Day 1, 4:00 PM', oppositeContent: 'Check-in and campsite visit' },
      { content: 'Day 1, 7:00 PM', oppositeContent: 'Dinner with music' },
      { content: 'Day 2, 5:30 AM', oppositeContent: 'Sunrise between mountains' },
      { content: 'Day 2, 8:00 AM', oppositeContent: 'Breakfast and check-out' },
    ];
  
}


