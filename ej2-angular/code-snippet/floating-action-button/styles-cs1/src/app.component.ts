

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
                </div>
                <!-- To Render Floating Action Button with applied warning style -->
                <button ejs-fab id='fab' iconCss= 'e-icons e-edit' cssClass= 'e-warning' target='#targetElement'></button>`
})

export class AppComponent { }


