import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService, GradientService } from '@syncfusion/ej2-angular-lineargauge'



import { Component } from '@angular/core';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService, GradientService ],
standalone: true,
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
         <e-axis>
           <e-ranges>
             <e-range start=50 end=80 startWidth=15 endWidth=15 color="Orange"></e-range>
           </e-ranges>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    ngOnInit(): void {
    }
}


