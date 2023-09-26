

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To Render SpeedDial component with text only -->
        <button ejs-speeddial id="speeddial" content='Edit' target='#targetElement'></button>`
})

export class AppComponent { }


