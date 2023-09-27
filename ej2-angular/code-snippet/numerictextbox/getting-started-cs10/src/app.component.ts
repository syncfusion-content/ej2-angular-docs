

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component
    // sets the step value as '2' to increase/decrease the value by '2'
    // sets the showSpinButton value as `false` to hide the spin buttons
    template: `
            <ejs-numerictextbox step='2' [showSpinButton]='false' min='10' max='100' value='16'></ejs-numerictextbox>
            `
})
export class AppComponent {
    constructor() {
    }
}


