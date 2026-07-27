import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-circulargauge'
import { Component, OnInit } from '@angular/core';

@Component({
imports: [CircularGaugeModule],
providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" [tooltip]="tooltip">
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value=35></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public tooltip?: Object;
    ngOnInit(): void {
        this.tooltip = {
            enable: true
        };
    }
}



