import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge'



import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { IPointerDragEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template: `
    <ejs-lineargauge style="display:block" id="gauge-container" (dragMove)='dragMove($event)'>
        <e-axes>
         <e-axis>
           <e-pointers>
             <e-pointer enableDrag=true></e-pointer>
           </e-pointers>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    dragMove(args: IPointerDragEventArgs) {
    }
}


