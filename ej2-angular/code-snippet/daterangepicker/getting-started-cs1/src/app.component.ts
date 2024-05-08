import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars'



import { Component,HostListener,ViewChild } from '@angular/core';
import { CalendarComponent, DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
imports: [
        
        FormsModule,
        DateRangePickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
        <ejs-daterangepicker #ejDateRangePicker placeholder='Select a range'></ejs-daterangepicker>
        `
})

export class AppComponent {
   @ViewChild('ejDateRangePicker') ejDateRangePicker?: CalendarComponent;
   @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.altKey && event.keyCode === 84 /* t */) {
        // press alt+t to focus the control.
        (this.ejDateRangePicker as any).inputElement.focus();
    }
  }
    constructor() {
    }
}


