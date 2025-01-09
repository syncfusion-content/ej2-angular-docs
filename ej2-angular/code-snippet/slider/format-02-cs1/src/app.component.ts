import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SliderModule } from '@syncfusion/ej2-angular-inputs'
import { Component } from '@angular/core';

@Component({
    imports: [
        SliderModule
    ],
    standalone: true,
    selector: 'my-app',
    template: `
    <div id='container'>
        <div class='wrap'>
            <ejs-slider id='slider'  [min]=0 [max]=1 [step]=.01 [value]=.3 [tooltip]="tooltipData" [ticks]="ticksData" ></ejs-slider>
        </div>
    </div>`
})

export class AppComponent {
    public tooltipData: Object = { placement: 'Before', isVisible: true, showOn: 'Always', format: 'P0' };
    public ticksData: Object = { placement: 'After', largeStep: .2, smallStep: .1, showSmallTicks: true, format: 'P0' };

}


