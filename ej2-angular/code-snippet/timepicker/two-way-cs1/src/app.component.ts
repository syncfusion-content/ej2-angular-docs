


import { Component, ViewChild } from '@angular/core';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template: `
        <!-- two-way binding using the value binding and model binding in the TimePicker --->
        <ejs-timepicker id="firsttime" #ejTimePicker [(value)]='value' width="230px"></ejs-timepicker>
        <ejs-timepicker id="secondtime" #ejTimePickers [(ngModel)]='value' width="230px"></ejs-timepicker>
        `
})
export class AppComponent {
    value: Date;
    constructor() {
        this.value = new Date("1/1/2019 1:30 PM");
    }
}


