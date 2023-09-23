


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis [lineStyle]="lineStyle" background="#b2d8d8"></e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public lineStyle?: Object;
    ngOnInit(): void {
        // Initialize objects
        this.lineStyle= {
            width: 2,
            color: 'red'
        };
    }
}



