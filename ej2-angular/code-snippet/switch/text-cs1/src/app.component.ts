

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To Render Switch. -->
               <ejs-switch onLabel="ON" offLabel="OFF" [checked]="true"></ejs-switch>
               </div>`
})

export class AppComponent { }


