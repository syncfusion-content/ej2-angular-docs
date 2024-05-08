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
            <e-axis [labelStyle]='label1'>
            </e-axis>
            <e-axis opposedPosition=true [labelStyle]='label2'>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    public label1?:Object;
    public label2?:Object;
    ngOnInit(): void {
        this.label1 =  {
            format: '{value}°C'
        };
        this.label2 =  {
            format: '{value}°F'
        };
    }
}


