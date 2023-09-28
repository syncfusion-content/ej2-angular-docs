


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
      <div class='wrap'>
          <ejs-slider id='slider'  [type]= 'type' [tooltip] = 'tooltip' [value]=30></ejs-slider>
      </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
  public type: string ="MinRange";
  public tooltip: Object ={ placement: 'After', isVisible: true, showOn: 'Always' };
}



