import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { TimelineItemModel, TimelineModule, TimelineAllModule } from "@syncfusion/ej2-angular-layouts";

@Component({
imports: [ CommonModule, TimelineModule, TimelineAllModule ],


standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public frameworks: TimelineItemModel[] = [
        { content: 'ReactJs', oppositeContent: 'Owned by Facebook' },
        { content: 'Angular', oppositeContent: 'Owned by Google' },
        { content: 'VueJs', oppositeContent: 'Owned by Evan you' },
        { content: 'Svelte', oppositeContent: 'Owned by Rich Harris' }
      ];
}


