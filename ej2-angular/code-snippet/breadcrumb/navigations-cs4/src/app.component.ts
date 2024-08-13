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
            <!-- To Render Breadcrumb. -->
            <ejs-breadcrumb (beforeItemRender)="beforeItemRenderHandler($event)">
                <e-breadcrumb-items>
                   <e-breadcrumb-item text="Home" url="https://ej2.syncfusion.com/documentation/introduction/"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Getting" url="https://ej2.syncfusion.com/documentation/breadcrumb/getting-started"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Icons" url="https://ej2.syncfusion.com/documentation/breadcrumb/icons"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Navigations" url="https://ej2.syncfusion.com/documentation/breadcrumb/navigation"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Overflow" url="https://ej2.syncfusion.com/documentation/breadcrumb/overflow"></e-breadcrumb-item>
                </e-breadcrumb-items>
            </ejs-breadcrumb>
            </div>`
})

export class AppComponent {
    public beforeItemRenderHandler(args: BreadcrumbBeforeItemRenderEventArgs): void {
        if (args.element.children[0]) {
            (args.element.children[0] as any).target = "_blank";
        }
    }
}


