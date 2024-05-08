import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations'
import { ChipListModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
imports: [ BreadcrumbModule, ChipListModule],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
            <!-- To Render Breadcrumb. -->
            <ejs-breadcrumb cssClass="e-breadcrumb-chips">
                    <e-breadcrumb-items>
                        <e-breadcrumb-item text="Cart"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Billing"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Shipping"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Payment"></e-breadcrumb-item>
                    </e-breadcrumb-items>
                    <ng-template #separatorTemplate>
                        <span class="e-icons e-arrow"></span>
                    </ng-template>
                </ejs-breadcrumb>
                </div>`
})

export class AppComponent {}


