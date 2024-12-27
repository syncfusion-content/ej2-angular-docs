import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItemModel, TimelineModule, TimelineAllModule } from "@syncfusion/ej2-angular-layouts";

@Component({
    imports: [TimelineModule, TimelineAllModule, CommonModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public mealTimes: TimelineItemModel[] = [
        { content: 'Breakfast', oppositeContent: '8:00 AM' },
        { content: 'Lunch', oppositeContent: '1:00 PM' },
        { content: 'Dinner', oppositeContent: '8:00 PM' },
    ];
}
