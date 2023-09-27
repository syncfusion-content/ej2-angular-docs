

import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component
    // sets the minimum and maximum range values
    // strictMode has been enabled by defualt
    template: `
            <ejs-numerictextbox min='10' max='20' value='16' step='2'></ejs-numerictextbox>
            `
})
export class AppComponent {
    constructor() {
    }
}


