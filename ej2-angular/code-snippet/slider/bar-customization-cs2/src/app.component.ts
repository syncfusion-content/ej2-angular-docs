import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SliderModule, SliderComponent, SliderChangeEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [SliderModule],
  standalone: true,
  selector: 'my-app',
  template: `
    <div class="slider_container">
      <div class="slider-labeltext slider_userselect">Height</div>
      <ejs-slider id='height_slider' [value]='value' [min]='min' [max]='max'></ejs-slider>
    </div>
    <div class="slider_container">
      <div class="slider-labeltext slider_userselect">Gradient color</div>
      <ejs-slider id='gradient_slider' [value]='gradient_value' [min]='min' [max]='max' [type]='range'></ejs-slider>
    </div>
    <div class="slider_container">
      <div class="slider-labeltext slider_userselect">Dynamic thumb and selection bar color</div>
      <ejs-slider #dynamicSlider id='dynamic_color_slider' [value]='dynamic_value' [min]='min' [max]='max' [type]='range' (created)='created()' (change)='change($event)'></ejs-slider>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('dynamicSlider', { static: false }) dynamicSlider!: SliderComponent;

  public value: number = 30;
  public min: number = 0;
  public max: number = 100;
  public gradient_value: number = 30;
  public range: string = 'MinRange';
  public dynamic_value: number = 30;

  // Handler used for slider created event
  created() {
    setTimeout(() => {
      if (this.dynamicSlider) {
        const sliderTrack = this.dynamicSlider.element.querySelector('.e-range') as HTMLElement;
        const sliderHandle = this.dynamicSlider.element.querySelector('.e-handle') as HTMLElement;
        if (sliderTrack && sliderHandle) {
          sliderHandle.style.backgroundColor = 'green';
          sliderTrack.style.backgroundColor = 'green';
        }
      }
    });
  }

  // Handler used for slider change event
  change(args: SliderChangeEventArgs | any) {
    if (this.dynamicSlider) {
      const sliderTrack = this.dynamicSlider.element.querySelector('.e-range') as HTMLElement;
      const sliderHandle = this.dynamicSlider.element.querySelector('.e-handle') as HTMLElement;
      if (sliderTrack && sliderHandle) {
        let color = 'green';
        if (args.value > 25 && args.value <= 50) {
          color = 'royalblue';
        } else if (args.value > 50 && args.value <= 75) {
          color = 'darkorange';
        } else if (args.value > 75 && args.value <= 100) {
          color = 'red';
        }
        sliderHandle.style.backgroundColor = color;
        sliderTrack.style.backgroundColor = color;
      }
    }
  }
}