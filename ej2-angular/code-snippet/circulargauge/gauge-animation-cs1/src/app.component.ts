import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularGaugeModule, AnnotationsService, GradientService } from '@syncfusion/ej2-angular-circulargauge'

import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         CircularGaugeModule
    ],

providers: [GradientService, AnnotationsService],
standalone: true,
  selector: 'app-container',
  template: `<ejs-circulargauge style='display:block;' animationDuration=2000 >
    <e-axes>
        <e-axis radius='80%' startAngle=230 endAngle=130 [majorTicks]='majorTicks' [minorTicks]='minorTicks'
            [lineStyle]='lineStyle' [labelStyle]="labelStyle" [ranges]="ranges">
            <e-pointers>
                <e-pointer value=60 radius='60%' pointerWidth=7 color='#c06c84' [animation]='animation' [cap]="cap"
                    [needleTail]="tail">
                </e-pointer>
            </e-pointers>
            <e-annotations>
                    <e-annotation angle="165"  radius="35%" zIndex='1'>
						<ng-template #content>
							<div>
                            <div style="font-size:18px;margin-left: -20px;margin-top: -12px; color:#9DD55A">60</div>
                            </div>
                        </ng-template>
                    </e-annotation>
                </e-annotations>
        </e-axis>
    </e-axes>
</ejs-circulargauge>`,
})
export class AppComponent implements OnInit {
  public animation?: Object;
  public majorTicks?: Object;
  public minorTicks?: Object;
  public lineStyle?: Object;
  public labelStyle?: Object;
  public cap?: Object;
  public tail?: Object;
  public ranges?: Object;

  ngOnInit(): void {
    this.majorTicks = {
      offset: 5,
    };
    this.minorTicks = {
      offset: 5,
    };
    this.ranges = [
      {
        start: 0,
        end: 30,
        color: '#E63B86',
        startWidth: 22,
        endWidth: 22,
        radius: '60%',
        linearGradient: {
          startValue: '0%',
          endValue: '100%',
          colorStop: [
            { color: '#9e40dc', offset: '0%', opacity: 1 },
            { color: '#d93c95', offset: '70%', opacity: 1 },
          ],
        },
      },
      {
        start: 30,
        end: 60,
        color: '#E0E0E0',
        startWidth: 22,
        endWidth: 22,
        radius: '60%',
      },
    ];
    this.lineStyle = {
      width: 8,
      color: '#E0E0E0',
    };

    this.labelStyle = {
      font: {
        fontFamily: 'inherit',
      },
      offset: -1,
    };

    this.animation = {
      enable: true,
      duration: 500,
    };

    this.cap = {
      radius: 8,
      color: '#c06c84',
      border: { width: 0 },
    };

    this.tail = {
      length: '0%',
    };
  }
}