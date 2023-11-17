

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Breadcrumb with items. -->
            <ejs-breadcrumb [enableNavigation]="false" (beforeItemRender)="beforeItemRenderHandler($event)" url="https://ej2.syncfusion.com/angular/demos/breadcrumb/bind-to-location"></ejs-breadcrumb>`
})

export class AppComponent {
    beforeItemRenderHandler(args: BreadcrumbBeforeItemRenderEventArgs): void {
        if (args.item.text === 'bind-to-location') {
            args.item.text = 'location';
        }
    }
}


