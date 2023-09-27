

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component
    // sets the custom css for NumericTextBox
    template: `
            <ejs-numerictextbox  cssClass='e-style'  value='10'  placeholder= 'Enter Value' floatLabelType= 'Always'  ></ejs-numerictextbox>
            `
})
export class AppComponent {
    constructor() {
    }
}


