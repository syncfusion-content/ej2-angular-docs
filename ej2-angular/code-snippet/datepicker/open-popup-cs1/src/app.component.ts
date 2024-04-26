import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component, ViewChild } from '@angular/core';
import { CalendarComponent, FocusEventArgs } from '@syncfusion/ej2-angular-calendars';

@Component({
imports: [
        
        DatePickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-datepicker #default (focus)='onFocus($event)' placeholder='Choose a date'></ejs-datepicker>`
})
export class AppComponent {
    @ViewChild('default')
    public datepickerObj?: CalendarComponent;

    onFocus(args: FocusEventArgs): void {
        (this.datepickerObj as any).show();
    }
}



