


import { Component, ViewChild } from '@angular/core';
import { DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
    selector: 'app-root',
    template: `
        <!-- two-way binding using the value binding and model binding in the DateRangePicker --->
        <ejs-daterangepicker #ejDateRangePicker [(value)]='value'  width="230px"></ejs-daterangepicker>
        <ejs-daterangepicker #ejDateRangePickers [(ngModel)]='value'  width="230px"></ejs-daterangepicker>
        `
})
export class AppComponent {
    value: Date;
    constructor() {
        this.value = [new Date('1/1/2020'), new Date('2/1/2023')] as any;
    }
}


