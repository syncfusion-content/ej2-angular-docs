

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" [container]='container' orientation='horizontal'>
      <e-axes>
        <e-axis minimum=0 maximum=100 [line]='line' [majorTicks]='majorTicks' [minorTicks]='minorTicks' [labelStyle]='labelStyle' [pointers]='pointers' [ranges]='ranges'>
        </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
  public container?: Object;
  public line?: Object;
  public majorTicks?: Object;
  public minorTicks?: Object;
  public labelStyle?: Object;
  public pointers?: Object[];
  public ranges?: Object[];
  ngOnInit(): void {
    this.container = { width: 30, offset: 30 }
    this.line= {
      width: 0
    };
    this.majorTicks= {
      interval: 25,
      height: 0
    };
    this.minorTicks= {
      height: 0
    },
    this.labelStyle= {
      font: {
        color: '#424242',
        size: '0px'
      }, offset: 55
    };
    this.pointers = [{
      value: 80, height: 25,
      width: 35, placement: 'Near',
      offset: -44, markerType: 'Triangle',
      radialGradient: {
        radius: '60%',
        outerPosition: { x: '50%', y: '50%' },
        innerPosition: { x: '50%', y: '50%' },
        colorStop: [
          { color: '#fff5f5', offset: '0%', opacity: 0.9 },
          { color: '#f54ea2', offset: '100%', opacity: 0.8 }
        ]
      }
    }];
    this.ranges=[{
      start: 0, end: 80,
      startWidth: 30, endWidth: 30,
      color: '#f54ea2', offset: 30
    }]
  }
}


