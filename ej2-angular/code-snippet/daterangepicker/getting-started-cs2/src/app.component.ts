


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-daterangepicker (renderDayCell)='disableDate($event)' placeholder='Select a range'></ejs-daterangepicker>`
})
export class AppComponent {
    constructor() {
    }
    disableDate(args: any): void {
         if (args.date.getDay() == 0 || args.date.getDay() == 6) {
        //sets isDisabled to true to disable the date.
        args.isDisabled = true;
    }
    }
}



