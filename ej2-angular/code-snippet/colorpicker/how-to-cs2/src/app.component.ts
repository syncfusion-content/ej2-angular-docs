

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h4>Disabled State</h4>
               <!-- To disable ColorPicker. -->
               <ejs-input ejs-colorpicker type="color" id="element" [disabled]="true" />`
})

export class AppComponent { }


