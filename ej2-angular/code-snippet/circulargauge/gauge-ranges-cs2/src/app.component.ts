


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis minimum=0 maximum=100 [majorTicks]="majorTicks" [minorTicks]="minorTicks">
                <e-ranges>
                    <e-range start=40 end=80 startWidth=15 endWidth=15 color="#ff5985"></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public majorTicks?: Object;
    public minorTicks?: Object;
    ngOnInit(): void {
        // Initialize objects.
        this.majorTicks = {
            interval: 10
        };
        this.minorTicks = {
            interval: 5
        };
    }
}



