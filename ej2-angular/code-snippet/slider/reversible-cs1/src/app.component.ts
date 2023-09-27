


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
      <div class='wrap'>
          <ejs-slider id='slider' [type]="type" [orientation]="orientation" [min]= 'min' [max]= 'max' [value]= 'value' [tooltip]='tooltip' [ticks] = 'ticks' ></ejs-slider>
      </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
  public orientation: string ="Vertical";
  public type: string = "Range";
  // Set maximum value to min property
  public min: number = 100;
  // Set minimum value to max property
  public max: number = 0;
  // Set initial range values to value property
  public value: number[] = [30, 70];
  public ticks: Object =  { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true };
  public tooltip: Object = { placement: 'Before', isVisible: true, showOn: 'Always' };
}



