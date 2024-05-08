import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-circulargauge'



import { Component } from '@angular/core';

@Component({
imports: [
         CircularGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    // specifies the template string for the CircularGauge component
    template: `<ejs-circulargauge id="circular-container"></ejs-circulargauge>`
})
export class AppComponent {

}


