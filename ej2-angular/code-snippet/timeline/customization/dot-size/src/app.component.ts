import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineItemModel, TimelineModule, TimelineAllModule } from "@syncfusion/ej2-angular-layouts";

@Component({
  imports: [TimelineModule, TimelineAllModule, CommonModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public dotSizes: TimelineItemModel[] = [
    { content: 'Extra Small', cssClass: 'x-small' },
    { content: 'Small', cssClass: 'small' },
    { content: 'Medium', cssClass: 'medium' },
    { content: 'Large', cssClass: 'large' }
  ];

}


