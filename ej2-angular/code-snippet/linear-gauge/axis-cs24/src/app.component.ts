

import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { ILoadEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (load)='load($event)'>
    </ejs-lineargauge>`
})
export class AppComponent {
    load(args: ILoadEventArgs) {
    }
}


