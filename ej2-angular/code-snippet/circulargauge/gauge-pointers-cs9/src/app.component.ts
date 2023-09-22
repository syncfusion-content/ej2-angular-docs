


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value=90 type="Marker" markerShape="Triangle" radius="100%" color="white" [markerHeight]="markerSize" [markerWidth]="markerSize" [border]="pointerBorder"></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public pointerBorder?: Object;
    public markerSize?: number;
    ngOnInit(): void {
        // Initialize objects
        this.markerSize = 15;
        this.pointerBorder= {
            color: '#007DD1',
            width: 2
        };
    }
}



