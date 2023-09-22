


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" background='skyblue' [border]='gaugeBorder'>
        <e-axes>
            <e-axis [lineStyle]="lineStyle" [majorTicks]="majorTicks" [minorTicks]="minorTicks" startAngle=230 endAngle=130 radius="90%" maximum=120>
                <e-pointers>
                    <e-pointer value=60 radius="60%"></e-pointer>
                </e-pointers>
                <e-ranges>
                    <e-range start=0 end=70 radius="110%" strokeWidth=10></e-range>
                    <e-range start=70 end=110 radius="110%" strokeWidth=10></e-range>
                    <e-range start=110 end=120 radius="110%" strokeWidth=10></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public gaugeBorder?: Object;
    public majorTicks?: Object;
    public minorTicks?: Object;
    public lineStyle?: Object;
    ngOnInit(): void {
        // Initialize objects.
        this.gaugeBorder = { color: "#FF0000", width: 2 };
        this.majorTicks = { width: 1, color: '#8c8c8c' };
        this.minorTicks = { width: 1, color: '#8c8c8c' };
        this.lineStyle = { width: 2};
    }
}



