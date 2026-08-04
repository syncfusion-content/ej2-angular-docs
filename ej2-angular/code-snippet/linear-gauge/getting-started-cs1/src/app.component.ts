import { Component } from '@angular/core';
import { LinearGaugeModule, GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge';

@Component({
    imports: [LinearGaugeModule],
    standalone: true,
    selector: 'app-root',
    providers: [GaugeTooltipService],
    template: `<ejs-lineargauge id="gauge-container" style='display:block;' [tooltip]="tooltip">
                <e-axes>
                    <e-axis>
                        <e-pointers>
                            <e-pointer value=50></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>`
})
export class AppComponent {
   public tooltip: Object = {
        enable: true
    };
}