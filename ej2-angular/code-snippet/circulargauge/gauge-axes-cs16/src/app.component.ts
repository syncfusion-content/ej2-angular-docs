


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis [pointers]="pointers" [majorTicks]="majorTicks" [minorTicks]="minorTicks"></e-axis>
            <e-axis [pointers]="pointers" [majorTicks]="majorTicks1" [minorTicks]="minorTicks1"></e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public majorTicks?: Object;
    public minorTicks?: Object;
    public majorTicks1?: Object;
    public minorTicks1?: Object;
    public pointers?: Object;
    ngOnInit(): void {
        // Initialize objects
        this.pointers = [];
        this.majorTicks= {
            interval: 10,
            height: 10
        };
        this.minorTicks= {
            interval: 5,
            height: 5
        };
        this.majorTicks1= {
            interval: 10,
            height: 10
        };
        this.minorTicks1= {
            interval: 5,
            height: 5
        };
    }
}



