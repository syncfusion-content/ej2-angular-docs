

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <h4>Choose Color</h4>
               <!-- To hide the value area. -->
               <ejs-input ejs-colorpicker type="color" id="element" cssClass="e-hide-value" [modeSwitcher]="false" /></div>`
})

export class AppComponent { }


