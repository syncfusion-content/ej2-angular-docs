

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <h4>Disabled State</h4>
               <!-- To disable ColorPicker. -->
               <ejs-input ejs-colorpicker type="color" id="element" [disabled]="true" /></div>`
})

export class AppComponent { }


