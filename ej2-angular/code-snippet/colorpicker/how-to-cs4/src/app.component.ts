

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h4>Select Color</h4>
               <!-- To render Picker. -->
               <ejs-input ejs-colorpicker type="color" id="element" mode="Palette" [modeSwitcher]="false" [showButtons]="false" />`
})

export class AppComponent { }


