import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

@Component({
imports: [
        
        TimePickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-timepicker placeholder='Select a time' ></ejs-timepicker>`
})
export class AppComponent {
    constructor() {
    }
}



