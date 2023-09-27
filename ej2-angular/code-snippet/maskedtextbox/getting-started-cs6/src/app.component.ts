

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // sets the prompting symbol to the MaskedTextBox
    // sets mask format to the MaskedTextBox
    template: `
            <ejs-maskedtextbox promptChar="#" mask='999-999-9999'></ejs-maskedtextbox>
            `
})
export class AppComponent {
    constructor() {
    }
}


