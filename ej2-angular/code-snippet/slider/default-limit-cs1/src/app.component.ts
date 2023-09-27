


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
      <div class='wrap'>
          <ejs-slider id='slider' [type]='type' [min]= 'min' [max]= 'max' [value]= 'value' [tooltip]='tooltip'
          [limits]='limits'></ejs-slider>
      </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
  public type: string ="MinRange";
  public value: number = 30;
  public tooltip: object= { isVisible: true };
  public min: number = 0;
  public max: number = 100;
  public limits: object = { enabled: true, minStart: 10, minEnd: 40 };
}



