import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';

@Component({
imports: [
        
        DatePickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-datepicker format='yyyy-MM-dd' [inputFormats]="['dd/MM/yyyy', 'yyyyMMdd']" placeholder='Enter date'
    [value]=dateValue></ejs-datepicker>`
})
export class AppComponent {
    public dateValue: Date = new Date("05/17/2017");
    constructor() {
    }
}



