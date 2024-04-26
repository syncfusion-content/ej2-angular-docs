import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge'




import { Component, OnInit, ViewChild } from '@angular/core';
import { PrintService, CircularGaugeComponent } from '@syncfusion/ej2-angular-circulargauge';
@Component({
imports: [
         CircularGaugeModule
    ],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" [allowPrint]=true #gauge>
    </ejs-circulargauge><div> <button id='print' (click)='print()'>Print</button></div>`,
    providers: [PrintService]
})
export class AppComponent implements OnInit {
    @ViewChild('gauge')
    public gaugeObj?: CircularGaugeComponent;
    ngOnInit(): void {
        // ngOnInit code here
      }

      public print(): void {
        this.gaugeObj!.print();
      }
}



