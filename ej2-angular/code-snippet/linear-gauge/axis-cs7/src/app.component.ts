import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge'



import { Component } from '@angular/core';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
            <e-axis [showLastLabel]='isLabel' [maximum]='maximum'>
                <e-pointers>
                    <e-pointer value=20></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    public maximum?: number;
    public isLabel?: boolean;
    ngOnInit(): void {
        this.maximum = 115;
        this.isLabel = true;
    }
}


