

import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { TooltipComponent } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'my-app',
    template: `
      <div id="box">
        <div class="circletool" id="rectShape" style="left:1%;top:10%">
          <ejs-tooltip cssClass='e-tooltip-css' content='SVG Square' target='#square'>
              <svg>
                <rect id="square" class="shape" x="50" y="20" width="50" height="50" style="fill:#FDA600;stroke:none;stroke-width:5;stroke-opacity:0.9" />
              </svg>
          </ejs-tooltip>
        </div>

        <div class="circletool" id="ellipseShape" style="top:63%;">
          <ejs-tooltip cssClass='e-tooltip-css' content='SVG Ellipse' target='#ellipse'>
              <svg>
                <ellipse id="ellipse" class="shape" cx="100" cy="50" rx="20" ry="40" style="fill:#0450C2;stroke:none;stroke-width:2" />
              </svg>
          </ejs-tooltip>
        </div>

        <div class="circletool" id="polyShape" style="top:25%;left:40%">
          <ejs-tooltip cssClass='e-tooltip-css'  content='SVG Polyline' target='#polyline'>
              <svg>
                <polyline id="polyline" class="shape" points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" style="fill:#ffffff;stroke:#0450C2;stroke-width:4" />
              </svg>
          </ejs-tooltip>
        </div>

        <div class="circletool" id="circleShape" style="top:16%;left:72%">
          <ejs-tooltip cssClass='e-tooltip-css' content='Canvas Circle' target='#circle'>
            <canvas #circle id="circle" class="shape" width="60" height="60"></canvas>
          </ejs-tooltip>
        </div>

        <div class="circletool" id="triShape" style="top:73%;left:76%">
          <ejs-tooltip cssClass='e-tooltip-css' content='Canvas Triangle' target='#triangle'>
            <canvas #triangle id="triangle" class="shape" width="100" height="50"></canvas>
          </ejs-tooltip>
        </div>
      </div>
    `,
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  public context?: any;
  public circlecontext?: any;
  @ViewChild('triangle')canvasRef: ElementRef | any;
  @ViewChild('circle')circleRef: ElementRef | any;
  ngOnInit(){
if (this.canvasRef.nativeElement.getContext) {
    this.context = this.canvasRef.nativeElement.getContext('2d');
    this.context.beginPath();
    this.context.moveTo(0, 50);
    this.context.lineTo(100, 50);
    this.context.lineTo(50, 0);
    this.context.fillStyle = "#FDA600";
    this.context.fill();
}
this.circlecontext = this.circleRef.nativeElement.getContext('2d');
let centerX: number = this.circleRef.nativeElement.width / 2;
let centerY: number = this.circleRef.nativeElement.height / 2;
let radius: number = 30;
this.circlecontext.beginPath();
this.circlecontext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
this.circlecontext.fillStyle = '#0450C2';
this.circlecontext.fill();
}
}



