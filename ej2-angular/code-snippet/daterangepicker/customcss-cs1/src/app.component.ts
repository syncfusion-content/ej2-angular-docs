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
    styleUrls: ['./style.css'],
    template: `<ejs-daterangepicker #ejDateRangePicker cssClass='customCSS'  placeholder='Select a range'></ejs-daterangepicker>`
})
export class AppComponent {
    constructor() {}
}



