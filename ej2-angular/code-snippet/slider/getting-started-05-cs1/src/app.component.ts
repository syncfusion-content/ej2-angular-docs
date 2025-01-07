import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SliderModule } from '@syncfusion/ej2-angular-inputs'
import { Component } from '@angular/core';

@Component({
  imports: [
    SliderModule
  ],
  standalone: true,
  selector: 'my-app',
  template: `
    <div id='container'>
      <div class='wrap'>
          <ejs-slider id='slider'  [type]= 'type' [showButtons]=true [value] = 'value' ></ejs-slider>
      </div>
    </div>`,
})

export class AppComponent {
  public type: string = "Range";
  public value: number[] = [30, 70];
}

