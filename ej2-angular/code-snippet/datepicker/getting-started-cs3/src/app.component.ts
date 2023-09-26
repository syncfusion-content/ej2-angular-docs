


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-datepicker format='yyyy-MM-dd' placeholder='Enter date'
    [value]=dateValue></ejs-datepicker>`
})
export class AppComponent {
    public dateValue: Date = new Date("05/17/2017");
    constructor() {
    }
}



