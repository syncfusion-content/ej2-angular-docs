import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge'
import { loadCldr, L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base'




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
            <e-axis [labelStyle]="labelStyle"></e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public labelStyle?: Object;
    ngOnInit(): void {
        // Initialize objects.
        this.labelStyle= {
            // Label format set as currency.
            format: 'c'
        };
    }
}



