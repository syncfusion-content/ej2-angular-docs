

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To Render SpeedDial component with applied warning style -->
        <button ejs-speeddial id="speeddial" content='Edit' cssClass='e-warning' target='#targetElement'></button>`
})

export class AppComponent { }


