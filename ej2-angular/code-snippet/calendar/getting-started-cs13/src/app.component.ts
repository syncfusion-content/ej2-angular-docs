import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'



import { Component,HostListener,ViewChild } from '@angular/core';

@Component({
imports: [
        
        CalendarModule //declaration of ej2-angular-calendars module into NgModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
        <ejs-calendar #ejCalendar [value]='dateValue'></ejs-calendar>
        `
})

export class AppComponent {
   @ViewChild('ejCalendar') ejCalendar: any;
    public dateValue: Date = new Date();
    @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.altKey && event.keyCode === 84 /* t */) {
        // press alt+t to focus the control.
        this.ejCalendar.element.querySelectorAll('.e-content table')[0].focus();
    }
  }
    constructor() {
    }
}


