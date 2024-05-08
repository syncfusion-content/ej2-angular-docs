import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'




import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
imports: [
        
        CalendarModule //declaration of ej2-angular-calendars module into NgModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
        <ejs-calendar #ejCalendar (navigated)='onNavigate($event)'></ejs-calendar>
        `
})

export class AppComponent {
    @ViewChild('ejCalendar') ejCalendar?: CalendarComponent;
   //skips a month while cliking previous and next icon in month view.
   onNavigate(args : any):void {
    let date: Number | any;
    if ((<HTMLInputElement>(event as Event).currentTarget).classList.contains('e-next')) {
        //incrementing the month while clicking the next icon
        date = new Date(args.date.setMonth(args.date.getMonth() + 1));
    }
    if ((<HTMLInputElement>(event as Event).currentTarget).classList.contains('e-prev')) {
        //decrementing the month while clicking the previous icon
        date = new Date(args.date.setMonth(args.date.getMonth() - 1));
    }
    if (args.view == 'month') {
        this.ejCalendar?.navigateTo('month' as any, new Date('' + date));
    }
}
}



