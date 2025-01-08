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
          <ejs-slider id='slider'  [orientation]= 'orientation' [value]=30></ejs-slider>
      </div>
    </div>`,
})

export class AppComponent {
  public orientation: string = "Vertical";
}


