

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // sets mask format to the MaskedTextBox
    template: `<label class='label'>Enter the mobile number</label>`+
              `<ejs-maskedtextbox mask='000-000-0000'></ejs-maskedtextbox>`
})
export class AppComponent {
    constructor() {
    }
}


