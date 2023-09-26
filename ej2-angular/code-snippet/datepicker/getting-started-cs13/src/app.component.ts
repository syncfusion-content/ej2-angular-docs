


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template:  `<ejs-datepicker  format='dd/MM/yyyy' placeholder='Enter date' [value]='dateValue' [min]='minDate' [max]='maxDate'></ejs-datepicker>`
})
export class AppComponent {
    public dateValue: Date = new Date("5/28/2018");
    public minDate : Date = new Date ("5/5/2018");
    public maxDate : Date = new Date ("5/25/2018");
    constructor() {
    }
}



