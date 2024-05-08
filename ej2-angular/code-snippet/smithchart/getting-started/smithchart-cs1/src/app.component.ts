import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SmithchartModule, TooltipRenderService, SmithchartLegendService } from '@syncfusion/ej2-angular-charts'



import { Component } from '@angular/core';

@Component({
imports: [
         SmithchartModule
    ],

providers: [TooltipRenderService, SmithchartLegendService],
standalone: true,
    selector: 'app-container',
    // specifies the template string for the Smithchart component
    template: `<ejs-smithchart id="smithchart-container"  height='350px'></ejs-smithchart>`
})
export class AppComponent {

}


