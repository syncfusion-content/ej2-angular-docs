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
            <ejs-breadcrumb [enableNavigation]="false"></ejs-breadcrumb></div>`
})

export class AppComponent {}


