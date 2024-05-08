import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { AnnotationsService } from '@syncfusion/ej2-angular-lineargauge'

import { Component } from '@angular/core';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ AnnotationsService ],
standalone: true,
  selector: 'app-container',
  template: `
    <ejs-lineargauge id='defaultContainer' background='transparent' style='display:block;'
        orientation='Horizontal' [annotations]='annotation' [axes]='axes' animationDuration="3000">
    </ejs-lineargauge>`,
})

export class AppComponent {
  public axes?: Object[];
  public annotation?: Object;
  ngOnInit(): void {
    this.axes = [
      {
        pointers: [
          {
            value: 10,
            height: 15,
            width: 15,
            placement: 'Near',
            offset: -40,
            markerType: 'Triangle',
          },
        ],
        ranges: [
          {
            start: 0,
            end: 50,
            startWidth: 10,
            endWidth: 10,
            color: '#F45656',
            offset: 35,
          },
        ],
        majorTicks: {
          interval: 10,
          height: 20,
          color: '#9E9E9E',
        },
        minorTicks: {
          interval: 2,
          height: 10,
          color: '#9E9E9E',
        },
        labelStyle: {
          offset: 48,
          font: { fontFamily: 'inherit' },
        },
      },
    ];
    this.annotation = [
      {
        content:
          '<div style="width: 70px;margin-left:-3%;margin-top: 42%;font-size: 16px;">10 MPH</div>',
        axisIndex: 0,
        axisValue: 10,
        x: 10,
        y: -70,
        zIndex: '1',
      },
    ];
  }
}
