import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations'



import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-navigations';

enableRipple(true);

@Component({
imports: [ BreadcrumbModule],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
            <!-- To Render Breadcrumb with items. -->
            <ejs-breadcrumb [enableNavigation]="false" (beforeItemRender)="beforeItemRenderHandler($event)" url="https://ej2.syncfusion.com/angular/demos/breadcrumb/bind-to-location"></ejs-breadcrumb></div>`
})

export class AppComponent {
    beforeItemRenderHandler(args: BreadcrumbBeforeItemRenderEventArgs): void {
        if (args.item.text === 'bind-to-location') {
            args.item.text = 'location';
        }
    }
}


