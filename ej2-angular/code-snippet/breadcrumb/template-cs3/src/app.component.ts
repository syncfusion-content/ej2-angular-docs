

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Breadcrumb. -->
        <ejs-breadcrumb [enableNavigation]="false" cssClass="e-specific-item-template">
            <e-breadcrumb-items>
                <e-breadcrumb-item text="Home" url="https://ej2.syncfusion.com/home/angular.html"></e-breadcrumb-item>
                <e-breadcrumb-item text="Components" url="https://ej2.syncfusion.com/angular/demos/#/material/grid/over-view"></e-breadcrumb-item>
                <e-breadcrumb-item text="Navigations" url="https://ej2.syncfusion.com/angular/demos/#/material/menu/default"></e-breadcrumb-item>
                <e-breadcrumb-item text="Breadcrumb" url="./breadcrumb/default"></e-breadcrumb-item>
            </e-breadcrumb-items>
            <ng-template #itemTemplate let-dataSource="">
                <div>
                    <span *ngIf="dataSource.text === 'Breadcrumb'; else otherContent" class="e-searchfor-text"><span style="margin-right: 5px">Search for:</span>
                    <a class="e-breadcrumb-text" href="dataSource.url" onclick="return false">{{dataSource.text}}</a></span>
            <ng-template #otherContent>
                <a class="e-breadcrumb-text" href="dataSource.url" onclick="return false">{{dataSource.text}}</a>
                            </ng-template>
                </div>
            </ng-template>
        </ejs-breadcrumb>`
})

export class AppComponent {}


