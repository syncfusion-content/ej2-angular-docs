


import { Component, ViewEncapsulation, ViewChild} from '@angular/core';
import { SliderComponent } from '@syncfusion/ej2-angular-inputs';
import { SliderTickRenderedEventArgs, SliderTickEventArgs, Placement } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'my-app',
    template: `<div class="slider_container" id="slider_wrapper">
            <div class="slider_labelText userselect">Dynamic ticks color</div>
            <ejs-slider id='ticks_slider' [value]='value' [min]='min' [max]='max' [type]='type' [step]='step' [ticks]='ticks' (renderingTicks)='renderingTicks($event)' ></ejs-slider>
        </div>
        <div class="slider_container">
            <div class="slider_labelText userselect">Ticks with legends</div>
            <ejs-slider id='slider' [value]='value' [min]='min' [max]='max' [type]='type' [ticks]='slider_ticks' (renderedTicks)='renderedTicks($event)'></ejs-slider>
        </div>`,
    styleUrls : ["./app.component.css"],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public count: number = 1;
    public value: number = 30;
    public min: number = 0;
    public max: number = 100;
    public step: number = 5;
    public type: string = 'MinRange';
    public ticks: Object = { placement: 'Before', largeStep: 20 };
    public slider_ticks: Object = { placement: 'Both', largeStep: 20, smallStep: 5 };
    public renderingTicks(args: SliderTickEventArgs | any): void {
        if (args.tickElement.classList.contains('e-large')) {
            args.tickElement.classList.add('e-custom');
        }
    }
    public renderedTicks(args: SliderTickRenderedEventArgs | any): void {
        let li: any = args.ticksWrapper.getElementsByClassName('e-large');
        let remarks: any = ['Very Poor', 'Poor', 'Average', 'Good', 'Very Good', 'Excellent'];
        for (let i: number = 0; i < li.length; ++i) {
            (li[i].querySelectorAll('.e-tick-both')[1] as HTMLElement).innerText = remarks[i];
        }
    }
}



