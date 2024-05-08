import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'



import { Component } from '@angular/core';

@Component({
imports: [
        
        CalendarModule //declaration of ej2-angular-calendars module into NgModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
        <!-- Sets the value, start-->
        <ejs-calendar  [value]='dateValue' start='Year'></ejs-calendar>
        `
})

export class AppComponent {
    public dateValue: Object = new Date();
    constructor() {
    }
}



