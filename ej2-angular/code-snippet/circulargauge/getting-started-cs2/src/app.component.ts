import { CircularGaugeModule, GaugeTooltipService } from '@syncfusion/ej2-angular-circulargauge'
import { Component } from '@angular/core';

@Component({
imports: [CircularGaugeModule],
providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-root',
    template:
    `<ejs-circulargauge id="circular-container" style='display:block;' [tooltip]="tooltip">
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value=35></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent {
    public tooltip: Object = {
        enable: true
    };
}



