import { Component } from '@angular/core';
import { LinearGaugeModule, GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge';

@Component({
    imports: [LinearGaugeModule],
    standalone: true,
    selector: 'app-container',
    providers: [GaugeTooltipService],
    template: `<ejs-lineargauge id="gauge-container" [tooltip]="tooltip"></ejs-lineargauge>`
})
export class AppComponent {
    public tooltip?: Object;
    ngOnInit(): void {
        this.tooltip = {
            enable: true
        };
    }
}