

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h4>Choose Color</h4>
               <!-- To hide the value area. -->
               <ejs-input ejs-colorpicker type="color" id="element" cssClass="e-hide-value" [modeSwitcher]="false" />`
})

export class AppComponent { }


