

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component
    // sets value to the NumericTextBox
    template: `
            <ejs-numerictextbox value='10'></ejs-numerictextbox>
            `
})
export class AppComponent {
    constructor() {
    }
}


