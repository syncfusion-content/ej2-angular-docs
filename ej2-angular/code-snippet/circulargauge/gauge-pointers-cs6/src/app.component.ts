import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge'
import { GradientService } from '@syncfusion/ej2-angular-circulargauge'




import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         CircularGaugeModule
    ],

providers: [GradientService],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value=50 type="RangeBar" radius="60%" pointerWidth=15 color='#007DD1'[border]="pointerBorder"></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public pointerBorder?: Object;
    ngOnInit(): void {
        // Initialize objects
        this.pointerBorder = {
            color: 'grey',
            width: 2
        };
    }
}



