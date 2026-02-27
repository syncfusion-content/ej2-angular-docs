import { Component } from '@angular/core';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';

@Component({
    imports: [
        LinearGaugeModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the linear gauge component
    template: `<ejs-lineargauge id="gauge-container"></ejs-lineargauge>`
})
export class AppComponent {

}


