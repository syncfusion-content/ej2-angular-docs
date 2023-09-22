


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis minimum=0 maximum=200 startAngle=270 endAngle=90 hideIntersectingLabel=true [majorTicks]="majorTicks" [minorTicks]="minorTicks"></e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public minorTicks?: Object;
    public majorTicks?: Object;
    ngOnInit(): void {
        // Initialize objects
        this.majorTicks= {
            interval: 4,
        };
        this.minorTicks= {
            interval: 2,
        };
    }
}



