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
    template: `
    <ejs-lineargauge id="gauge-container" [container]='container'>
      <e-axes>
        <e-axis>
          <e-pointers>
            <e-pointer type="Bar" value=50>
            </e-pointer>
          </e-pointers>
        </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})

export class AppComponent implements OnInit {
    public container?: string | any;
    ngOnInit(): void {
        this.container = {
            width:30,
            type: "RoundedRectangle"
        };
    }
}


