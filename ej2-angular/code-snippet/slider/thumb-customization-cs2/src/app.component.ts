


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SliderComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'my-app',
    template: `
    <div class="slider_container">
            <div class="labelText slider-userselect">Square</div>
            <ejs-slider id='square_slider' [value]='value' [min]='min' [max]='max'></ejs-slider>
        </div>
        <div class="slider_container">
            <div class="labelText slider-userselect">Circle</div>
            <ejs-slider id='circle_slider' [value]='value' [min]='min' [max]='max'></ejs-slider>
        </div>
        <div class="slider_container">
            <div class="labelText slider-userselect">Oval</div>
            <ejs-slider id='oval_slider' [value]='value' [min]='min' [max]='max'></ejs-slider>
        </div>
        <div class="slider_container">
            <div class="labelText slider-userselect">Custom image</div>
            <ejs-slider id='image_slider' [value]='value' [min]='min' [max]='max' [ticks]='ticks'></ejs-slider>
        </div>`,
    styleUrls : ["./app.component.css"],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public value: number = 30;
    public min: number = 0;
    public max: number = 100;
    public ticks: Object = {
        placement: 'After'
    };
}



