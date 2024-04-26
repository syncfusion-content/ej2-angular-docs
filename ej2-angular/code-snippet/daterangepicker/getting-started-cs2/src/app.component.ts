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
    template: `<ejs-daterangepicker (renderDayCell)='disableDate($event)' placeholder='Select a range'></ejs-daterangepicker>`
})
export class AppComponent {
    constructor() {
    }
    disableDate(args: any): void {
         if (args.date.getDay() == 0 || args.date.getDay() == 6) {
        //sets isDisabled to true to disable the date.
        args.isDisabled = true;
    }
    }
}



