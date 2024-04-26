import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { AnnotationsService } from '@syncfusion/ej2-angular-lineargauge'




import { Component } from '@angular/core';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ AnnotationsService ],
standalone: true,
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-annotations>
            <e-annotation content='<div><h1 style="color:red;">Speed</h1></div>' zIndex="1" x=250 y=80>
            </e-annotation>
            <e-annotation content='<div><h1 style="color:blue;">Meter</h1></div>' zIndex="1" x=240 y=-100>
            </e-annotation>
        </e-annotations>
    </ejs-lineargauge>`
})
export class AppComponent {
    ngOnInit(): void {
    }
}



