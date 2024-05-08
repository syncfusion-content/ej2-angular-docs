import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge'



import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { IAnimationCompleteEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (animationComplete)='animationComplete($event)'>
        <e-axes>
         <e-axis>
           <e-pointers>
             <e-pointer value=10></e-pointer>
           </e-pointers>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    animationComplete(args: IAnimationCompleteEventArgs) {
    };
}


