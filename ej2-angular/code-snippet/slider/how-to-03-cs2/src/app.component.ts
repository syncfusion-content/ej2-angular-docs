


import { Component } from '@angular/core';
import { SliderTickEventArgs, SliderTooltipEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
        <div class='wrap'>
            <div class='label'>Slider formatted with unit representation</div>
            <ejs-slider id='slider' [min]=0 [max]=100 [value]=30 [tooltip]="tooltipData01" [ticks]="ticksData01"></ejs-slider>
        </div>

        <div class='wrap'>
            <div class='label'>Slider formatted with three decimal specifiers</div>
            <ejs-slider id='slider1' [min]=0.1 [max]=0.2 [step]=0.01 [value]=0.13 [tooltip]="tooltipData02" [ticks]="ticksData02"></ejs-slider>
        </div>

        <div class='wrap'>
            <div class='label'>Slider formatted with two leading zeros</div>
            <ejs-slider id='slider2' [min]=0 [max]=100 [value]=30 [tooltip]="tooltipData03" [ticks]="ticksData03"></ejs-slider>
        </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
    public tooltipData01: Object = { isVisible: true, format: '##.## Km' };
    public ticksData01: Object = { placement: 'After', format: '##.## Km', largeStep: 20, smallStep: 10, showSmallTicks: true };

    public tooltipData02: Object = { isVisible: true, format: '##.#00' };
    public ticksData02: Object = { placement: 'After', format: '##.#00', largeStep: 0.02, smallStep: 0.01, showSmallTicks: true };

    public tooltipData03: Object = { isVisible: true, format: '00##' };
    public ticksData03: Object = { placement: 'After', format: '00##', largeStep: 20, smallStep: 10, showSmallTicks: true };

}



