

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

@Component({
    selector: 'app-root',
    template: `
        <ejs-timepicker [value]='dateValue' [min]='minDate' [max]='maxDate'></ejs-timepicker>
        `
})
export class AppComponent {
    public minDate: Date = new Date('8/3/2017 9:00 AM');
    public maxDate: Date = new Date('8/3/2017 11:30 AM');
    public dateValue: Date = new Date('8/3/2017 10:00 AM');
    constructor() {
    }
}



