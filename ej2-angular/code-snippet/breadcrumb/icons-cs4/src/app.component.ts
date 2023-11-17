

import { Component } from '@angular/core';
import { BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Breadcrumb. -->
            <div id="breadcrumb-control" class="control-section">
                <div class="header"><b>Icon Position - Left</b></div><br />
                <ejs-breadcrumb [enableNavigation]="false">
                    <e-breadcrumb-items>
                        <e-breadcrumb-item iconCss="e-bicons e-folder" text="Program Files"></e-breadcrumb-item>
                        <e-breadcrumb-item iconCss="e-bicons e-folder" text="Services"></e-breadcrumb-item>
                        <e-breadcrumb-item iconCss="e-bicons e-file" text="Config.json"></e-breadcrumb-item>
                    </e-breadcrumb-items>
                </ejs-breadcrumb>
                <br /><br/>
                <div class="header"><b>Icon Position - Right</b></div><br />
                    <ejs-breadcrumb [enableNavigation]="false" (beforeItemRender)="beforeItemRenderHandler($event)">
                    <e-breadcrumb-items>
                        <e-breadcrumb-item iconCss="e-bicons e-folder" text="Program Files"></e-breadcrumb-item>
                        <e-breadcrumb-item iconCss="e-bicons e-folder" text="Services"></e-breadcrumb-item>
                        <e-breadcrumb-item iconCss="e-bicons e-file" text="Config.json"></e-breadcrumb-item>
                    </e-breadcrumb-items>
                </ejs-breadcrumb>
            </div>`
})

export class AppComponent {
    public beforeItemRenderHandler(args: BreadcrumbBeforeItemRenderEventArgs): void {
        if(args.item.text !== '') {
            args.element.classList.add('e-icon-right');
        }
    }
}


