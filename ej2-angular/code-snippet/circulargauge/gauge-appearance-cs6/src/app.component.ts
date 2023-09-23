


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" centerX='10%' centerY='50%'>
        <e-axes>
            <e-axis [lineStyle]="lineStyle" startAngle=270 endAngle=90>
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



