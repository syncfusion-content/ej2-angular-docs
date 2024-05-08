import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';

@Component({
imports: [
        
        CalendarModule,
        DatePickerModule,
        FormsModule
    ],


standalone: true,
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template: `
        <!-- two-way binding using the value binding and model binding in the DatePicker --->
        <ejs-datepicker id="fisrtdatepicker" #ejDatePicker [(value)]='value' width="230px"></ejs-datepicker>
        <ejs-datepicker id="seconddatepicker" #ejDatePickers [(ngModel)]='value' width="230px"></ejs-datepicker>
        `
})
export class AppComponent {
    value: Date;
    constructor() {
        this.value = new Date('1/1/2020');
    }
}


