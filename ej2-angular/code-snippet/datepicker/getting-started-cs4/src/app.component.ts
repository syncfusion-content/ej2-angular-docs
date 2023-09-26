

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <ejs-datepicker [value]='dateValue' [min]='minDate' [max]='maxDate'></ejs-datepicker>
        `
})
export class AppComponent {
    public today: Date = new Date();
    public currentYear: number = this.today.getFullYear();
    public currentMonth: number = this.today.getMonth();
    public currentDay: number = this.today.getDate();
    public dateValue: Object = new Date(new Date().setDate(14));
    public minDate: Object = new Date(this.currentYear, this.currentMonth, 1);
    public maxDate: Object =  new Date(this.currentYear, this.currentMonth, 27);
    constructor() {
    }
}



