

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
         <!-- Bind renderDayCell event to customize and disable the day cell. --->
        <ejs-calendar [value]='dateValue' (renderDayCell)='disabledDate($event)'></ejs-calendar>
        `
})

export class AppComponent {
    public dateValue: Date = new Date();
    constructor() {
    }
    disabledDate(args : any): void {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            //set 'true' to disable the weekends
            args.isDisabled = true;
        }
    }

}


