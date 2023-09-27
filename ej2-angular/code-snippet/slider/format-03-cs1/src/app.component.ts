


import { Component } from '@angular/core';
import { SliderTickEventArgs, SliderTooltipEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
        <div class='wrap'>
            <ejs-slider id='slider'  #default [min]=0 [max]=6 [value]=2 [tooltip]="tooltipData" [ticks]="ticksData"
            (tooltipChange)='tooltipChangeHandler($event)' (renderingTicks)='renderingTicksHandler($event)' ></ejs-slider>
        </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
    public tooltipData: Object = { placement: 'Before', isVisible: true };
    public ticksData: Object = { placement: 'After', largeStep: 1 };

    tooltipChangeHandler(args: SliderTooltipEventArgs | any): void {
        // Weekdays Array
        let daysArr: string [] = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
        // Customizing each ticks text into weeksdays
        args.text = daysArr[parseFloat(args.value)];
    }

    renderingTicksHandler(args: SliderTickEventArgs | any): void {
        // Customizing tooltip to display the Day (in numeric) of the week
        args.text =  'Day ' + (Number(args.value) + 1).toString();
    }
}



