import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';

@Component({
imports: [
        
        DateRangePickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-daterangepicker format='yyyy-MM-dd' placeholder='Select a range' [startDate]="startDate" [endDate]="endDate"></ejs-daterangepicker>`
})
export class AppComponent {
    public startDate: Date = new Date(new Date().setDate(1));
    public endDate: Date = new Date(new Date().setDate(20));
    constructor() {
    }
}



