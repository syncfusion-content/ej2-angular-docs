


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value=90 type="Marker" markerShape="InvertedTriangle" radius="100%" [markerHeight]="markerSize" [markerWidth]="markerSize"></e-pointer>
                    <e-pointer value=90 type="RangeBar" radius="60%" pointerWidth=10></e-pointer>
                    <e-pointer value=90 radius="60%" pointerWidth=25 [cap]="pointerCap" [needleTail]= "pointerTail"></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public markerSize?: number;
    public pointerCap?: Object;
    public pointerTail?: Object;
    ngOnInit(): void {
        // Initialize objects
        this.markerSize = 15;
        this.pointerCap = {
            radius: 15,
            border: {
                width: 5
            }
        };
        this.pointerTail = {
            length: '22%'
        };
    }
}



