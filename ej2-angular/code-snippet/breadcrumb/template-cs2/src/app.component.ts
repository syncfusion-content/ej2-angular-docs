

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Breadcrumb. -->
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
                </ejs-breadcrumb>`
})

export class AppComponent {}


