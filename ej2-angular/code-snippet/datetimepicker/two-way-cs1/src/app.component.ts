


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!-- two-way binding using the value binding and model binding in the DateTimePicker --->
        <ejs-datetimepicker id="fisrtdatetime" #ejDateTimePicker [(value)]='value' width="230px"></ejs-datetimepicker>
        <ejs-datetimepicker id="seconddatetime" #ejDateTimePickers [(ngModel)]='value' width="230px"></ejs-datetimepicker>
        `
})
export class AppComponent {
    value: Date;
    constructor() {
        this.value = new Date("1/1/2019 1:30 PM");
    }
}


