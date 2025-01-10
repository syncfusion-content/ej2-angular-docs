import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SliderModule, SliderComponent, LimitDataModel, SliderType, TicksDataModel, TooltipDataModel } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
        SliderModule
    ],
    standalone: true,
    selector: 'my-app',
    template: ` <div class='sliderwrap'>
            <label class="labeltext">MinRange Slider With Limits</label>
            <ejs-slider id='minrange' #minrange [value]='minValue' [min]='min' [max]='max' [tooltip]='tooltip' [ticks]='ticks' [type]='minType'
                [limits]='minRangeLimits'></ejs-slider>
        </div>
        <div class='sliderwrap'>
            <label class="labeltext">Range Slider With Limits</label>
            <ejs-slider id='range' #range [value]='rangeValue' [min]='min' [max]='max' [tooltip]='tooltip' [ticks]='ticks' [type]='rangetype'
                [limits]='rangeLimits'></ejs-slider>
        </div>`,
})
export class AppComponent {
    @ViewChild('minrange')
    public minrangeObj?: SliderComponent;
    @ViewChild('range')
    public rangeObj?: SliderComponent;

    public min: number = 0;
    public max: number = 100;

    public minValue: number = 30;
    public rangeValue: number[] = [30, 70];

    public tooltip: TooltipDataModel = {
        placement: 'Before',
        isVisible: true
    };
    public ticks: TicksDataModel = {
        placement: 'After',
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
    };

    public minType: SliderType = 'MinRange';
    public rangetype: SliderType = 'Range';

    public minRangeLimits: LimitDataModel = { enabled: true, minStart: 10, minEnd: 40 };
    public rangeLimits: LimitDataModel = { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 };

}

