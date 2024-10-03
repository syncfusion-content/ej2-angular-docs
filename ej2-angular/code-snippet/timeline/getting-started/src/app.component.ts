import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TimelineModule, TimelineAllModule } from '@syncfusion/ej2-angular-layouts'


import { Component } from '@angular/core';

@Component({
imports: [ TimelineModule, TimelineAllModule ],


standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
   
}


