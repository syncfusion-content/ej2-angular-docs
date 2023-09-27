

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component and
    // input element for checking the two-way binding support using value property
    template: `
     <div class='e-input-group' style='margin-bottom:30px'>
        <ejs-input class='e-input' type='text' [(ngModel)]='value' placeholder='Enter a number'  />
     </div>
    <ejs-numerictextbox [(value)]='value'></ejs-numerictextbox>
    `
})
export class AppComponent {
    value: any;
    constructor() {
    }
}



