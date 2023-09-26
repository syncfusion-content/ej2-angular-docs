

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To Render SpeedDial component with icon and text -->
        <button ejs-speeddial id="speeddial" content='Edit' openIconCss='e-icons e-edit' target='#targetElement'></button>`
})

export class AppComponent { }


