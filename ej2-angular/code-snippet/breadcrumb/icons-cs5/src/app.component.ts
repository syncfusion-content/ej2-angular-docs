

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Breadcrumb. -->
            <ejs-breadcrumb [enableNavigation]="false">
                <e-breadcrumb-items>
                   <e-breadcrumb-item iconCss="e-icons e-home"></e-breadcrumb-item>
                   <e-breadcrumb-item iconCss="e-bicons e-folder"></e-breadcrumb-item>
                   <e-breadcrumb-item iconCss="e-bicons e-file"></e-breadcrumb-item>
                </e-breadcrumb-items>
            </ejs-breadcrumb>`
})

export class AppComponent {}


