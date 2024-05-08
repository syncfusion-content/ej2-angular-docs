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
    styleUrls: ['./index.css'],
    template: `<ejs-daterangepicker [firstDayOfWeek]='startDay'  placeholder='Select a range'></ejs-daterangepicker>`
})
export class AppComponent {
    public startDay:Number = 1;
    constructor() {
    }
}



