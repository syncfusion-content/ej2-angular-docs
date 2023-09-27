


import { Component, ViewEncapsulation } from '@angular/core';
import { SliderModule, SliderTickEventArgs, SliderTooltipEventArgs } from '@syncfusion/ej2-angular-inputs';

/**
 * Default sample
 */

@Component({
    selector: 'my-app',
    template: `
    <button ejs-button id="element">Button</button>
    <div id='container'>
        <div id="wrap">
            <ejs-slider id='slider' [min]="min" [max]="max" [value]="value" [tooltip]="tooltipData" [ticks]="ticksData" [showButtons]=true [step]="step"
                (tooltipChange)='tooltipChangeHandler($event)' (renderingTicks)='renderingTicksHandler($event)'></ejs-slider>
        </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
    public tooltipData: Object = { placement: 'Before', isVisible: true };
    public ticksData: Object = { placement: 'After', largeStep: 2 * 3600000 };
    public min: number =new Date(2013, 6, 13, 11).getTime();
    public max: number = new Date(2013, 6, 13, 17).getTime();
    public step: number = 3600000;
    public value: number = new Date(2013, 6, 13, 13).getTime();

    tooltipChangeHandler(args: SliderTooltipEventArgs): void {
        let totalMilliSeconds = Number(args.text);
        let custom: any = { hour: '2-digit', minute: '2-digit' };
        args.text = new Date(totalMilliSeconds).toLocaleTimeString("en-us", custom);
    }

    renderingTicksHandler(args: SliderTickEventArgs): void {
        let totalMilliSeconds = Number(args.value);
        let custom: any = { hour: '2-digit', minute: '2-digit' };
        args.text = new Date(totalMilliSeconds).toLocaleTimeString("en-us", custom);
    }
    ngOnInit() {
      (document.getElementById('element') as HTMLElement).onclick = () => {
        let slider: HTMLElement = document.getElementById("wrap") as HTMLElement;
        let ticks: HTMLElement | any = document.getElementById("slider") as HTMLElement;
        slider.style.display = "block";
        ticks.ej2_instances[0].refresh();
    };
    }
}



