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
    template: `
        <ejs-timepicker [value]='dateValue' [min]='minValue' [max]='maxValue' [strictMode]='isStrictMode'></ejs-timepicker>
        `
})

export class AppComponent {
    public dateValue: Date = new Date('10/8/2017 3:00 PM');
    public minValue: Date = new Date('10/8/2017 10:00 AM');
    public maxValue: Date = new Date('10/8/2017 4:00 PM');
    public isStrictMode: boolean = true;
    constructor() {
    }
}


