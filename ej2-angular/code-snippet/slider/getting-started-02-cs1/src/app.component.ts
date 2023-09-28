


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
      <div class='wrap'>
          <div class="sliderwrap">
              <label class="labeltext">Default</label>
              <ejs-slider id='default' [value]=30></ejs-slider>
          </div>
          <div class="sliderwrap">
              <label class="labeltext">MinRange</label>
              <ejs-slider id='minrange' [type]="minType" [value]='minValue'></ejs-slider>
          </div>
          <div class="sliderwrap">
              <label class="labeltext">Range</label>
              <ejs-slider id='range' [type]="rangeType" [value]='rangeValue'></ejs-slider>
          </div>
      </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
  public minType: string = "MinRange";
  public rangeType: string = "Range";
  public minValue: number = 30;
  public rangeValue: number[] = [30, 70];
}



