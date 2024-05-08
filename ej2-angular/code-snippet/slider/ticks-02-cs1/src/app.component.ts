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
          <ejs-slider id='slider' [value]='value' [tooltip]="tooltip" [ticks] = 'ticks' [step] = 'step' ></ejs-slider>
      </div>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
  public value: number = 30;
  public tooltip: Object = { placement: 'Before', isVisible: true, showOn: 'Always' };
  public ticks: Object = { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true };
  public step: number = 10;
}



