

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id='container'>
            <span class="content-title"> Select date: </span>
            <ejs-inplaceeditor #element id="element" type="Date" [model]="model" [value]="value"></ejs-inplaceeditor>
        </div>
    `
})

export class AppComponent {
    public model: object = { placeholder: 'Select date', format: 'yyyy-MM-dd' };
    public value: Date = new Date('11/23/2018');
}



