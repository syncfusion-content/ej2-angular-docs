

import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { ITooltipRenderEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (tooltipRender)='tooltipRender($event)'>
    </ejs-lineargauge>`
})
export class AppComponent {
    tooltipRender(args: ITooltipRenderEventArgs) {
    }
}


