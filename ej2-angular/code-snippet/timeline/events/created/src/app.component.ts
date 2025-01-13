import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineItemModel, TimelineModule, TimelineAllModule } from "@syncfusion/ej2-angular-layouts";

@Component({
    imports: [ TimelineModule, TimelineAllModule, CommonModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public productLifecycle: TimelineItemModel[] = [
        { content: 'Planning'},
        { content: 'Developing'},
        { content: 'Testing' },
        { content: 'Launch' },
    ];

    handleTimelineCreated = () => {
    //your required action here 
    }
}


