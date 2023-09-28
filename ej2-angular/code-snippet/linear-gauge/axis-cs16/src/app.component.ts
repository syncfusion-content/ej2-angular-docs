

import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { IAxisLabelRenderEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (axisLabelRender)='axisLabelRender($event)'>
    </ejs-lineargauge>`
})
export class AppComponent {
    axisLabelRender(args: IAxisLabelRenderEventArgs) {
    };
}


