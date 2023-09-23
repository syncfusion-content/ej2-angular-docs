


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" centerX='20' centerY='20'>
        <e-axes>
            <e-axis [lineStyle]="lineStyle" startAngle=90 endAngle=180>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public lineStyle?: Object;
    ngOnInit(): void {
        // Initialize objects.
        this.lineStyle = {
            width: 2,
            color: '#F8F8F8'
        };
    }
}



