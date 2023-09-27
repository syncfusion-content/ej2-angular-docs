

import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { IResizeEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (resized)='resized($event)'>
    </ejs-lineargauge>`
})
export class AppComponent {
    resized(args: IResizeEventArgs) {
    }
}


