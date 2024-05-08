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
            <ejs-breadcrumb [enableNavigation]="false" [maxItems]=3 overflowMode="Hidden" >
                <e-breadcrumb-items>
                   <e-breadcrumb-item text="Home" url="../"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Getting" url="./breadcrumb/getting-started"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Data-Binding" url="./breadcrumb/data-binding"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Icons" url="./breadcrumb/icons"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Navigations" url="./breadcrumb/navigations"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Templates" url="./breadcrumb/templates"></e-breadcrumb-item>
                   <e-breadcrumb-item text="Overflow" url="./breadcrumb/overflow"></e-breadcrumb-item>
                </e-breadcrumb-items>
                <ng-template #separatorTemplate>
                    <span class='e-bicons e-arrow'></span>
                </ng-template>
            </ejs-breadcrumb>
            </div>`
})

export class AppComponent {}


