import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge'




import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-lineargauge id="gauge-container">
      <e-axes>
         <e-axis [minimum]='Minimum' [maximum]='Maximum'>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent implements OnInit {
    public Minimum?: number;
    public Maximum?: number;
    ngOnInit(): void {
       this.Minimum = 0,
       this.Maximum = 200
    }
}



