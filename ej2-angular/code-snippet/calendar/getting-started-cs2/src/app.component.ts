

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!-- Sets the value, start-->
        <ejs-calendar  [value]='dateValue' start='Year'></ejs-calendar>
        `
})

export class AppComponent {
    public dateValue: Object = new Date();
    constructor() {
    }
}



