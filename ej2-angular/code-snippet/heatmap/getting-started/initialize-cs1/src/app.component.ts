import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HeatMapModule} from '@syncfusion/ej2-angular-heatmap'



import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         HeatMapModule
    ],
standalone: true,
    selector: 'my-app',
    // specifies the template string for the HeatMap component
    template: `<ejs-heatmap id="heatmap-container"></ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}


