


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./index.css'],
    template: `<ejs-daterangepicker [firstDayOfWeek]='startDay'  placeholder='Select a range'></ejs-daterangepicker>`
})
export class AppComponent {
    public startDay:Number = 1;
    constructor() {
    }
}



