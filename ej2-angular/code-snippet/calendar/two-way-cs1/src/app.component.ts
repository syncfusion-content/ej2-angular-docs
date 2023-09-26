


import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
    selector: 'app-root',
    template: `
        <!-- two-way binding using the value binding and model binding in the Calendar --->
        <ejs-calendar id="firstcalendar" #ejCalendar [(value)]='value'></ejs-calendar>
        <ejs-calendar id="secondcalendar" #ejCalendars [(ngModel)]='value'></ejs-calendar>
        `
})
export class AppComponent {
    value: Date;
    constructor() {
        this.value = new Date('1/1/2020');
    }
}



