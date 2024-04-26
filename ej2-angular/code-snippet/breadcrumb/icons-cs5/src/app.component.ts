import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations'



import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
imports: [ BreadcrumbModule],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
            <!-- To Render Breadcrumb. -->
            <ejs-breadcrumb [enableNavigation]="false">
                <e-breadcrumb-items>
                   <e-breadcrumb-item iconCss="e-icons e-home"></e-breadcrumb-item>
                   <e-breadcrumb-item iconCss="e-bicons e-folder"></e-breadcrumb-item>
                   <e-breadcrumb-item iconCss="e-bicons e-file"></e-breadcrumb-item>
                </e-breadcrumb-items>
            </ejs-breadcrumb>
            </div>`
})

export class AppComponent {}


