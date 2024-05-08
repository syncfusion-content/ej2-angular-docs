import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService, GradientService } from '@syncfusion/ej2-angular-lineargauge'



import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService, GradientService ],
standalone: true,
    selector: 'app-container',
    template: `
     <ejs-lineargauge id="gauge-container" [container]='container' orientation='horizontal' [axes]='axes'>
    </ejs-lineargauge>`
})
export class AppComponent {
  public container?: Object;
  public axes?: Object[];
    ngOnInit(): void {
      // Initialize objects
      this.container = { width: 30, offset: 30 }
      this.axes = [{
        minimum: 0,
        maximum: 100,
        line: {
          width: 0
        },
        majorTicks: {
          interval: 25,
          height: 0
        },
        minorTicks: {
          height: 0
        },
        labelStyle: {
          font: {
          color: '#424242',
          }, offset: 55
        },
        pointers: [{
          value: 80, height: 25,
          width: 35, placement: 'Near',
          offset: -44, markerType: 'Triangle',
          color: '#f54ea2'
        }],
        ranges: [{
          start: 0, end: 80,
          startWidth: 30, endWidth: 30,
          offset: 30,
          linearGradient: {
            startValue: '0%',
            endValue: '100%',
            colorStop: [
              { color: '#fef3f9', offset: '0%', opacity: 1 },
              { color: '#f54ea2', offset: '100%', opacity: 1 }]
          }
        }]
      }];
    }
}


