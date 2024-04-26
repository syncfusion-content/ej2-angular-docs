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
    template: `<ejs-daterangepicker [min]='minDate' [max]='maxDate' placeholder='Select a range'></ejs-daterangepicker>`
})
export class AppComponent {
    public today: Date = new Date();
    public currentYear: number = this.today.getFullYear();
    public currentMonth: number = this.today.getMonth();
    public currentDay: number = this.today.getDate();
    public minDate: Object = new Date(this.currentYear, this.currentMonth, 15);
    public maxDate: Object =  new Date(this.currentYear, this.currentMonth+1, 15);
     constructor() {
    }
}



