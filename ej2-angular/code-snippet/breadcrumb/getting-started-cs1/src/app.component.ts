

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Breadcrumb with items. -->
            <ejs-breadcrumb [enableNavigation]="false">
                <e-breadcrumb-items>
                    <e-breadcrumb-item text="Home" url="https://ej2.syncfusion.com/home/angular.html"></e-breadcrumb-item>
                    <e-breadcrumb-item text="Components" url="https://ej2.syncfusion.com/angular/demos/#/material/grid/over-view"></e-breadcrumb-item>
                    <e-breadcrumb-item text="Navigations" url="https://ej2.syncfusion.com/angular/demos/#/material/breadcrumb/default"></e-breadcrumb-item>
                    <e-breadcrumb-item text="Breadcrumb" url="./breadcrumb/default"></e-breadcrumb-item>
                </e-breadcrumb-items>
            </ejs-breadcrumb>`
})

export class AppComponent {}


