import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge'



import { Component, ViewChild } from '@angular/core';
import { PrintService, LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" [allowPrint]=true #gauge>
    </ejs-lineargauge><div> <button  id='print' (click)='print()'>Print</button></div>`,
    providers: [PrintService]
})
export class AppComponent {
  @ViewChild('gauge')
  public gaugeObj: LinearGaugeComponent | any;
  print() {
    this.gaugeObj.print();
  };
}


