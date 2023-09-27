

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component
    // sets percentage with 2 numbers of decimal places format
    // sets currency with 2 numbers of decimal places format
    template: `
             <div class='wrap'>
               <ejs-numerictextbox format='p2' value='0.5' min='0' max='1' step='0.01' placeholder='Percentage format' floatLabelType= 'Auto'></ejs-numerictextbox>
             </div>
             <div class='wrap'>
               <ejs-numerictextbox format='c2' value='10' placeholder='Currency format' floatLabelType= 'Auto'></ejs-numerictextbox>
             </div>
            `
})
export class AppComponent {
    constructor() {
    }
}


