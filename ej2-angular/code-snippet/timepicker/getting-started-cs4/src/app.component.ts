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
        <ejs-timepicker [placeholder]='watermark' [format]='formatString' [step]='interval' ></ejs-timepicker>
        `
})

export class AppComponent {
    public watermark: string = 'Select a time';
    // sets the format property to display the time value in 24 hours format.
    public formatString: string = 'HH:mm';
    public interval: number = 60;
    constructor() {
    }
}



