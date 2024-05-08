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
         <!-- Bind renderDayCell event to customize and highlight the weekend of every month. --->
        <ejs-calendar [value]='dateValue' (renderDayCell)='highlightWeekend($event)'></ejs-calendar>
        `
})

export class AppComponent {
    public dateValue: Date = new Date();
    constructor() {
    }
    highlightWeekend(args : any): void {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            // To highlight the week end of every month
           args.element.classList.add('e-highlightweekend');
        }
    }

}


