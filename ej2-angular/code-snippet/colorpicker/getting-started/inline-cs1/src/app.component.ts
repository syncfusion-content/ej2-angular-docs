

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h4>Choose Color</h4>
               <!-- To render inline ColorPicker. -->
               <ejs-input ejs-colorpicker type="color" id="colorpicker" [inline]="true" [showButtons]="false" />`
})

export class AppComponent { }


