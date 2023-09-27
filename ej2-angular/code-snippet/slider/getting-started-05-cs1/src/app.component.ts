


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
      <div class='wrap'>
          <ejs-slider id='slider'  [type]= 'type' [showButtons]=true [value] = 'value' ></ejs-slider>
      </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
  public type: string ="Range";
  public value: number[] = [30, 70];
}



