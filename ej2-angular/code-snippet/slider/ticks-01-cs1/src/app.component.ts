


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
      <div class='wrap'>
          <ejs-slider id='slider'  [tooltip]= 'tooltip' [ticks]='ticks' [value] = 'value' ></ejs-slider>
      </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
  public value: number =30;
  public tooltip: Object = { placement: 'Before', isVisible: true, showOn: 'Always' };
  public ticks: Object = { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true };
}



