import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'
import { Component } from '@angular/core';

@Component({
    imports: [DatePickerModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-datepicker [value]='dateValue' placeholder='Enter date'></ejs-datepicker>`
})
export class AppComponent {
    public dateValue: Date = new Date();
    constructor() { }
}
