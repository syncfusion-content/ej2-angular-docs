


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis minimum=0 maximum=12 startAngle=0 endAngle=360 [majorTicks]="majorTicks" [minorTicks]="minorTicks" [labelStyle]="labelStyle"></e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public majorTicks?: Object;
    public minorTicks?: Object;
    public labelStyle?: Object;
    ngOnInit(): void {
        // Initialize objects
        this.majorTicks= {
            interval: 1,
            position: 'Inside',
            height: 10
        };
        this.minorTicks= {
            interval: 0.2,
            position: 'Inside',
            height: 5
        };
        this.labelStyle= {
            position: 'Inside',
            hiddenLabel: 'First'
        };
    }
}



