

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!-- Sets the value, start and depth-->
        <ejs-calendar #ejCalendar [value]='dateValue' start='Decade' depth='Year'></ejs-calendar>
        `
})

export class AppComponent {
    public dateValue: Object = new Date();
    constructor() {
    }
}


