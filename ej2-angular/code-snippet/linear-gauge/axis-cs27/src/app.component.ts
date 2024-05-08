import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge'



import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { ITooltipRenderEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (tooltipRender)='tooltipRender($event)'>
    </ejs-lineargauge>`
})
export class AppComponent {
    tooltipRender(args: ITooltipRenderEventArgs) {
    }
}


