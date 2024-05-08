import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge'
import { AnnotationsService, GradientService } from '@syncfusion/ej2-angular-circulargauge'




import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         CircularGaugeModule
    ],

providers: [AnnotationsService, GradientService],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis>
                <e-ranges>
                    <e-range start=40 end=80 radius='100'></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        // Initialize objects.
    }
}



