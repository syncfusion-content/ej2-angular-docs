

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component
    // sets currency with 2 numbers of decimal places format
    template: `
            <ejs-numerictextbox format='c2' value='10'></ejs-numerictextbox>
            `
})
export class AppComponent {
    constructor() {
    }
}


