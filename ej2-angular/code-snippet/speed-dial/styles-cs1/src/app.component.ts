

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
               <!-- To Render SpeedDial component with icon only -->
               <button ejs-speeddial id="speeddial" openIconCss='e-icons e-edit' target='#targetElement'></button>`
})

export class AppComponent { }


