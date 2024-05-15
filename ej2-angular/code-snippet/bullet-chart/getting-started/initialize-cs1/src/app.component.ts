import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BulletChartModule} from '@syncfusion/ej2-angular-charts'



import { Component } from '@angular/core';

@Component({
imports: [
         BulletChartModule
    ],

standalone: true,
    selector: 'app-container',
    // specifies the template string for the Chart component
    template: `<ejs-bulletchart id="chart-container"></ejs-bulletchart>`
})
export class AppComponent {

}


