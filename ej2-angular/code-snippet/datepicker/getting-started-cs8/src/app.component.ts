


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-datepicker [value]='dateValue' placeholder='Enter date'></ejs-datepicker>`
})
export class AppComponent {
    public dateValue: Date = new Date();
    constructor() {
    }
}



