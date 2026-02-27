import { Component } from '@angular/core';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

@Component({
    imports: [CircularGaugeModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the CircularGauge component
    template: `<ejs-circulargauge id="circular-container"></ejs-circulargauge>`
})
export class AppComponent { }


