

import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { IMouseEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (gaugeMouseMove)='gaugeMouseMove($event)'>
    </ejs-lineargauge>`
})
export class AppComponent {
    gaugeMouseMove(args: IMouseEventArgs) {
    }
}


