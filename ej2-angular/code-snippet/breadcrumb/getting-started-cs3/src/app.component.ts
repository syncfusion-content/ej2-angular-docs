

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
            <!-- To Render Breadcrumb. -->
            <ejs-breadcrumb [enableNavigation]="false" url="https://ej2.syncfusion.com/angular/demos/breadcrumb/bind-to-location"></ejs-breadcrumb></div>`
})

export class AppComponent {}


