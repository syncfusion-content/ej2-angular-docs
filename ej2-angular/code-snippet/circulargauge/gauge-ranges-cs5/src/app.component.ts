


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis [majorTicks]="majorTicks" [minorTicks]="minorTicks" [labelStyle]="labelStyle">
                <e-ranges>
                    <e-range start=0 end=25 radius='108%'></e-range>
                    <e-range start=25 end=50 radius='70%'></e-range>
                    <e-range start=50 end=75 radius='70%'></e-range>
                    <e-range start=75 end=100 radius='108%'></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public majorTicks?: Object;
    public minorTicks?: Object;
    public labelStyle?: Object;
    ngOnInit(): void {
        // Initialize objects.
        this.majorTicks = {
            useRangeColor: true
        };
        this.minorTicks = {
            useRangeColor: true
        };
        this.labelStyle = {
            useRangeColor: true
        };
    }
}



