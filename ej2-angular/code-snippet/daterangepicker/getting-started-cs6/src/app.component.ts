import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';

@Component({
imports: [
        
        FormsModule,
        DateRangePickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-daterangepicker placeholder='Select a range' [startDate]='start' [endDate]='end'></ejs-daterangepicker>`
})
export class AppComponent {
    public month: number = new Date().getMonth();
    public fullYear: number = new Date().getFullYear();
    public start: Date = new Date(this.fullYear, this.month - 1 , 7);
    public end: Date = new Date(this.fullYear, this.month, 25);
    constructor() {
    }
}



