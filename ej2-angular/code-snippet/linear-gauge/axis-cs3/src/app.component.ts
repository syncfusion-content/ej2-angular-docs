import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge'



import { Component } from '@angular/core';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
            <e-axis minimum=20 maximum=140 [majorTicks]='major' [minorTicks]='minor'>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    public major?:Object;
    public minor?:Object;
    ngOnInit(): void {
        this.major = {
            interval: 20,
            color: "Orange"
        };
        this.minor = {
             interval: 5,
            color: 'red'
        };
    }
}


