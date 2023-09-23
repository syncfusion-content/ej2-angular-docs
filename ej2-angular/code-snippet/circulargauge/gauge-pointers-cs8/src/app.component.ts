


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value=90 type="Marker" markerShape="InvertedTriangle" radius="100%" [markerHeight]="markerSize" [markerWidth]="markerSize"></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
   public markerSize?: number;
   ngOnInit(): void {
        // Initialize objects
        this.markerSize = 15;
    }
}



