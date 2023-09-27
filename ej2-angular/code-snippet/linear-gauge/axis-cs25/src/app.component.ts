

import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { ILoadedEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (loaded)='loaded($event)'>
    </ejs-lineargauge>`
})
export class AppComponent {
    loaded(args: ILoadedEventArgs) {
    }
}


