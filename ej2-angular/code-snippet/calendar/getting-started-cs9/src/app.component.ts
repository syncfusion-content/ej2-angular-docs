

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
              <!-- Sets the value, min and max -->
              <ejs-calendar [value]='dateValue' [min]='minDate' [max]='maxDate'></ejs-calendar>
        `
})
export class AppComponent {
    public month: number = new Date().getMonth();
    public fullYear: number = new Date().getFullYear();
    public dateValue: Date = new Date(this.fullYear, this.month , 11);
    public minDate: Date = new Date(this.fullYear, this.month , 9);
    public maxDate: Date = new Date(this.fullYear, this.month, 15);
    constructor() {
    }
}


