


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SliderComponent, SliderChangeEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'my-app',
    template: ` <div class="slider_container">
            <div class="slider-labeltext slider_userselect">Height</div>
            <!-- Square slider element -->
            <ejs-slider id='height_slider' [value]='value' [min]='min' [max]='max' ></ejs-slider>
        </div>
        <div class="slider_container">
            <div class="slider-labeltext slider_userselect">Gradient color</div>
            <ejs-slider id='gradient_slider' [value]='gradient_value' [min]='min' [max]='max' [type]='range' ></ejs-slider>
        </div>
        <div class="slider_container">
            <div class="slider-labeltext slider_userselect">Dynamic thumb and selection bar color</div>
            <ejs-slider id='dynamic_color_slider' [value]='dynamic_value' [min]='min' [max]='max' [type]='range' (created)='created()' (change)='change($event)'></ejs-slider>
        </div>`,
    styleUrls : ["./app.component.css"],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public value: number = 30;
    public min: number = 0;
    public max: number = 100;
    public gradient_value: number = 30;
    public range: string = 'MinRange';
    public sliderTrack?: HTMLElement;
    public sliderHandle?: HTMLElement;
    public dynamic_value: number = 30;
    // Handler used for slider created event
    created() {
        this.sliderTrack = (document.getElementById('dynamic_color_slider') as HTMLElement).querySelector('.e-range') as HTMLElement;
        this.sliderHandle = (document.getElementById('dynamic_color_slider') as HTMLElement).querySelector('.e-handle') as HTMLElement;
        (this.sliderHandle as HTMLElement).style.backgroundColor = 'green';
        (this.sliderTrack as HTMLElement).style.backgroundColor = 'green';
    }
    // Handler used for slider change event
    change(args: SliderChangeEventArgs | any) {
        if (args.value > 0 && args.value <= 25) {
            // Change handle and range bar color to green when
            (this.sliderHandle as HTMLElement).style.backgroundColor = 'green';
            (this.sliderTrack as HTMLElement).style.backgroundColor = 'green';
        } else if (args.value > 25 && args.value <= 50) {
            // Change handle and range bar color to royal blue
            (this.sliderHandle as HTMLElement).style.backgroundColor = 'royalblue';
            (this.sliderTrack as HTMLElement).style.backgroundColor = 'royalblue';
        } else if (args.value > 50 && args.value <= 75) {
            // Change handle and range bar color to dark orange
            (this.sliderHandle as HTMLElement).style.backgroundColor = 'darkorange';
            (this.sliderTrack as HTMLElement).style.backgroundColor = 'darkorange';
        } else if (args.value > 75 && args.value <= 100) {
            // Change handle and range bar color to red
            (this.sliderHandle as HTMLElement).style.backgroundColor = 'red';
            (this.sliderTrack as HTMLElement).style.backgroundColor = 'red';
        }
    }
}



