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
    template: `<ejs-daterangepicker [minDays]='minDays' [maxDays]='maxDays' placeholder='Select a range'></ejs-daterangepicker>`
})
export class AppComponent {
    public minDays: Number = 4;
    public maxDays: Number = 7;
     constructor() {
    }
}



