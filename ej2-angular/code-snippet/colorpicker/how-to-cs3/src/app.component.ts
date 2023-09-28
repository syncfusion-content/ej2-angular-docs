

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h4>Choose Color</h4>
               <!-- To hide control buttons. -->
               <ejs-input ejs-colorpicker type="color" id="element" [showButtons]="false" />`
})

export class AppComponent { }


