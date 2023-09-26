


import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';
import * as moment from 'moment';

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template: `
        <!-- Rendering the Calendar with Multi selection option--->
        <div class="wrapelement">
            <ejs-calendar #ejCalendar id="calendar" isMultiSelection='true' (change)="onChange($event)"></ejs-calendar>
            </div>
            <div class='btncontainer e-btn-group e-vertical'>
            <input type="radio" id="workweek" name="week" value="workweek" (click)="workWeek()" />
            <label class="e-btn" for="workweek">Work Week</label>
            <input type="radio" id="week" name="week" value="week" (click)="week()"/>
            <label class="e-btn" for="week">Week</label>
            </div>
        `
})
export class AppComponent {
    @ViewChild('ejCalendar') CalendarInstance?: CalendarComponent;
    /*selected current week dates when click the button*/
    workWeek() {
        if (this.CalendarInstance?.element.classList.contains('week')) {
            this.CalendarInstance.element.classList.remove('week')
        }
        this.CalendarInstance?.element.classList.add('workweek');
    }

    week() {
        if (this.CalendarInstance?.element.classList.contains('workweek')) {
            this.CalendarInstance.element.classList.remove('workweek')
        }
        this.CalendarInstance?.element.classList.add('week');
    }

    onChange(args: any) {
        var startOfWeek = moment(args.value).startOf('week');
        var endOfWeek: any = moment(args.value).endOf('week');
        if (this.CalendarInstance?.element.classList.contains('workweek')) {
            this.getWeekArray(startOfWeek.day(1), endOfWeek.day(5), this);
        } else if (this.CalendarInstance?.element.classList.contains("week")) {
            this.getWeekArray(startOfWeek, endOfWeek, this);
        }
    }

    getWeekArray(startOfWeek: any, endOfWeek: number, obj: this) {
        var days = [];
        var day = startOfWeek;
        while (day <= endOfWeek) {
            days.push(day.toDate());
            day = day.clone().add(1, 'd');
        }
        (obj.CalendarInstance as CalendarComponent ).values = days;
    }
}



