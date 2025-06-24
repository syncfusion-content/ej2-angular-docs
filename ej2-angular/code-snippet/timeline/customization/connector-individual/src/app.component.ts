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
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    public dailyRoutine: TimelineItemModel[] = [
        { content: 'Eat', cssClass: 'state-initial' },
        { content: 'Code', cssClass: 'state-intermediate' },
        { content: 'Repeat' }
    ];

}

