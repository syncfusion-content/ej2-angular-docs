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
             <e-range start=0 end=30 startWidth=10 endWidth=10 color='#41f47f'></e-range>
             <e-range start=30 end=50 startWidth=10 endWidth=10 color='#f49441'></e-range>
             <e-range start=50 end=100 startWidth=10 endWidth=10  color='#cd41f4'></e-range>
           </e-ranges>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
      ngOnInit(): void {
    }
}


