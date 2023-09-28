

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Breadcrumb. -->
            <ejs-breadcrumb [enableNavigation]="false">
                <e-breadcrumb-items>
                   <e-breadcrumb-item text="Home" url="../"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Getting" url="./breadcrumb/getting-started"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Icons" url="./breadcrumb/icons"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Navigations" url="./breadcrumb/navigations"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Overflow" url="./breadcrumb/overflow"></e-breadcrumb-item>
                </e-breadcrumb-items>
            </ejs-breadcrumb>`
})

export class AppComponent {}


