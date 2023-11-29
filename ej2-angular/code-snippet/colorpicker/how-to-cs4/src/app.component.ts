

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <h4>Select Color</h4>
               <!-- To render Picker. -->
               <ejs-input ejs-colorpicker type="color" id="element" mode="Palette" [modeSwitcher]="false" [showButtons]="false" /></div>`
})

export class AppComponent { }


