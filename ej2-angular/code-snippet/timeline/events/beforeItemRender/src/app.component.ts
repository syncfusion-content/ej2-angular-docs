import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


import { Component } from '@angular/core';
import { TimelineItemModel, TimelineRenderingEventArgs } from "@syncfusion/ej2-angular-layouts";

@Component({
imports: [ TimelineModule, TimelineAllModule ],


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
    
    handleBeforeItemRender = (args: TimelineRenderingEventArgs) => {
    //your required action here 
    }

}


