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
    template: `<button id='btn' (click)='refresh($event)'> Refresh</button><br>
       <br> <ejs-datepicker placeholder='Enter date'></ejs-datepicker>
        `
})

export  class  AppComponent  {
    refresh(args: any):void {
        document.location.reload();
    }
    constructor() {
    }
}


