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
    template: `<ejs-daterangepicker [format]='dateFormat' separator='to' placeholder='Select a range'></ejs-daterangepicker>`
})
export class AppComponent {
    public dateFormat: String = "yyyy-MM-dd";
    constructor() {
    }
}



