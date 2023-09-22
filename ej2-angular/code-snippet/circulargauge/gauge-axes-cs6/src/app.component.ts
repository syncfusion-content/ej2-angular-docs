


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis [majorTicks]="majorTicks" [minorTicks]="minorTicks"></e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public majorTicks?: Object;
    public minorTicks?: Object;
    ngOnInit(): void {
        // Initialize objects
        this.majorTicks= {
            interval: 10,
            color:'red',
            height: 10,
            width: 3
        };
        this.minorTicks= {
            interval: 5,
            color:'green',
            height: 5,
            width: 2
        };
    }
}



