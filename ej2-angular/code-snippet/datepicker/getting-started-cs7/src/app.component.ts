import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'
import { Component } from '@angular/core';

@Component({
    imports: [DatePickerModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-datepicker></ejs-datepicker>`
})
export class AppComponent {
    constructor() { }
}
