


import { Component } from '@angular/core';
import { SliderTickEventArgs, SliderTooltipEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
        <div class='wrap'>
            <div class='label'>Slider without formatted values</div>
            <ejs-slider id='slider' [type]="mintype" [min]=0 [max]=100 [value]=30 [step]=10 [tooltip]="tooltipData01" [ticks]="ticksData01"></ejs-slider>
        </div>
        <div class='wrap'>
            <div class='label'>Slider with formatted values</div>
            <ejs-slider id='slider1' [min]=0 [max]=6 [value]=2 [step]=1 [tooltip]="tooltipData02" [ticks]="ticksData02" 
            (tooltipChange)='tooltipChangeHandler($event)' (renderingTicks)='renderingTicksHandler($event)'></ejs-slider>
        </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
    public tooltipData01: Object = { placement: 'Before', isVisible: true, showOn: 'Always' };
    public ticksData01: Object = { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true };
    public mintype: string = 'MinRange';

    public tooltipData02: Object = { placement: 'Before', isVisible: true, showOn: 'Always' };
    public ticksData02: Object = { placement: 'After', largeStep: 1 };

    tooltipChangeHandler(args: SliderTooltipEventArgs): void {
        // Weekdays Array
        let daysArr: string [] = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
        // Customizing each ticks text into weeksdays
        args.text = daysArr[parseFloat(args.text)];
    }

    renderingTicksHandler(args: SliderTickEventArgs): void {
        // Customizing tooltip to display the Day (in numeric) of the week
        args.text =  'Day ' + (Number(args.text) + 1).toString();
    }
}



