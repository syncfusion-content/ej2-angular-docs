

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

@Component({
    selector: 'app-root',
    template: `
        <ejs-timepicker [value]='dateValue' [min]='minValue' [max]='maxValue'></ejs-timepicker>
        `
})

export class AppComponent {
    public month: number = new Date().getMonth();
    public fullYear: number = new Date().getFullYear();
    public date: number = new Date().getDate();
    public dateValue: Date = new Date(this.fullYear, this.month , this.date, 10, 0, 0);
    public minValue: Date = new Date(this.fullYear, this.month , this.date, 7, 0, 0);
    public maxValue: Date = new Date(this.fullYear, this.month, this.date, 16, 0 ,0);
    constructor() {
    }

}


