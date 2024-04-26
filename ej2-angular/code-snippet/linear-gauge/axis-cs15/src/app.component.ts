import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge'



import { Component } from '@angular/core';
import { AnnotationsService, LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { IAnnotationRenderEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (annotationRender)='annotationRender($event)'>
        <e-annotations>
            <e-annotation zIndex='1' content='<div id="first"><h1>Gauge</h1></div>' axisValue=0></e-annotation>
        </e-annotations>
    </ejs-lineargauge>`,
    providers: [AnnotationsService]
})
export class AppComponent {
    annotationRender(args: IAnnotationRenderEventArgs) {
    };
}


