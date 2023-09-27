

import { Component, OnInit } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component with change event
    // sets `German` culture using the culture value 'de'
    template: `<ejs-numerictextbox locale='de' value='10'></ejs-numerictextbox>`
})
export class AppComponent implements OnInit {
    constructor() {
    }
    ngOnInit(): void {
        // Load `German` culture to override spin buttons tooltip text
        L10n.load({
            'de': {
            'numerictextbox': {
                    incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'
                }
           }
        });
    }
}


