


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" [legendSettings]='legendSettings'>
        <e-axes>
            <e-axis minimum=0 maximum=100 [majorTicks]="majorTicks" [minorTicks]="minorTicks" [lineStyle]="lineStyle">
                <e-ranges>
                        <e-range start=0 end=25 radius='108%' legendText='light air'></e-range>
                        <e-range start=25 end=50 radius='108%' legendText='light air'></e-range>
                        <e-range start=50 end=75 radius='108%' legendText='light breeze'></e-range>
                        <e-range start=75 end=100 radius='108%' legendText='light breeze'></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public lineStyle?: Object;
    public majorTicks?: Object;
    public minorTicks?: Object;
    public legendSettings?: object;
    ngOnInit(): void {
        // Initialize objects.
        this.lineStyle= {
            useRangeColor: true
        };
         this.majorTicks = {
            useRangeColor: true
        };
        this.minorTicks = {
            useRangeColor: true
        };
        this.legendSettings= {
            visible: true,
        };
    }
}



