

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <ejs-datepicker id="datepicker" [min]='minDate' [max]='maxDate'></ejs-datepicker>
        `
})
export class AppComponent {
    public month: number = new Date().getMonth();
    public fullYear: number = new Date().getFullYear();
    public minDate: Date = new Date(this.fullYear, this.month , 7);
    public maxDate: Date = new Date(this.fullYear, this.month, 27);
    constructor() {
    }
}


