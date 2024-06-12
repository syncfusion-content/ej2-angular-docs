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

    public careerProgress: TimelineItemModel[] = [
      { content: 'June 2022', oppositeContent: 'Graduated \n Bachelors in Computer Engineering' },
      { content: 'Aug 2022', oppositeContent: 'Software Engineering Internship \n ABC Software and Technology' },
      { content: 'Feb 2023', oppositeContent: 'Associate Software Engineer \n ABC Software and Technology' },
      { content: 'Mar 2024', oppositeContent: 'Software Level 1 Engineer \n XYZ Solutions' },
    ];
  
}


