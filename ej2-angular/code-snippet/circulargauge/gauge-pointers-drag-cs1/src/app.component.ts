import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge'
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [
        CircularGaugeModule
    ],
    standalone: true,
    selector: 'app-container',
    template:
        `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis [pointers]='pointers'>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public pointers?: Object;
    ngOnInit(): void {
        this.pointers = [
            {
                enableDrag: false,
                value: 90,
                type: 'Marker',
                markerShape: 'InvertedTriangle',
                radius: '100%',
                markerHeight: 15,
                markerWidth: 15
            }, {
                enableDrag: true,
                value: 90,
                type: 'RangeBar',
                radius: '60%',
                pointerWidth: 10
            }, {
                enableDrag: true,
                value: 90,
                radius: '60%',
                cap: {
                    radius: 15,
                    border: {
                        width: 5
                    }
                },
                needleTail: {
                    length: '22%',
                },
                pointerWidth: 25
            }
        ];
    }
}