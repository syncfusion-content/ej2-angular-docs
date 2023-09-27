


import { Component } from '@angular/core';
import { SliderTickEventArgs, SliderTooltipEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
        <div class='wrap'>
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
        let totalMiliSeconds = Number(args.text);
        let custom: any = { hour: '2-digit', minute: '2-digit' };
        args.text = new Date(totalMiliSeconds).toLocaleTimeString("en-us", custom);
    }

    renderingTicksHandler(args: SliderTickEventArgs): void {
        let totalMiliSeconds = Number(args.value);
        let custom: any = { hour: '2-digit', minute: '2-digit' };
        args.text = new Date(totalMiliSeconds).toLocaleTimeString("en-us", custom);
    }
}



