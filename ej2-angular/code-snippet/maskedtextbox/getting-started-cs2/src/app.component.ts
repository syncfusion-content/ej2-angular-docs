

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // input element for checking the two-way binding support using value property
    template: `
     <div class='e-input-group' style='margin-bottom:30px'>
        <ejs-input class='e-input' type='text' [(ngModel)]='value' placeholder='Mobile Number' />
     </div>
     <ejs-maskedtextbox mask='000-000-0000' [(value)]='value'></ejs-maskedtextbox>
    `
})
export class AppComponent {
    public value: any;
    constructor() {
    }
}



