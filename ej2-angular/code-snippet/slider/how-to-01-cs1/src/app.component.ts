


import { Component } from '@angular/core';
import { SliderTickEventArgs, SliderTooltipEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
        <div class='wrap'>
            <ejs-slider id='slider' [min]="min" [max]="max" [value]="value" step=86400000 [tooltip]="tooltipData" [ticks]="ticksData" [showButtons]=true
                (tooltipChange)='tooltipChangeHandler($event)' (renderingTicks)='renderingTicksHandler($event)'></ejs-slider>
        </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
    public tooltipData: Object = { placement: 'Before', isVisible: true };
    public ticksData: Object = { placement: 'After', largeStep: 2 * 86400000 };
    public min: number = new Date("2013-06-13").getTime();
    public max: number = new Date("2013-06-21").getTime();
    public step: number = 86400000;
    public value: number = new Date("2013-06-15").getTime();

    tooltipChangeHandler(args: SliderTooltipEventArgs): void {
        let totalMiliSeconds = Number(args.text);
        // Converting the current milliseconds to the respective date in desired format
        let custom: any = { year: "numeric", month: "short", day: "numeric" };
        args.text = new Date(totalMiliSeconds).toLocaleDateString("en-us", custom);
    }

    renderingTicksHandler(args: SliderTickEventArgs): void {
        let totalMiliSeconds = Number(args.value);
        // Converting the current milliseconds to the respective date in desired format
        let custom: any = { year: "numeric", month: "short", day: "numeric" };
        args.text = new Date(totalMiliSeconds).toLocaleDateString("en-us", custom);
    }
}



