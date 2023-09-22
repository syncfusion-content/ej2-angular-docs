


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis [labelStyle]="labelStyle"></e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public labelStyle?: Object;
    ngOnInit(): void {
        // Initialize objects
        this.labelStyle= {
            autoAngle: true
        };
    }
}



