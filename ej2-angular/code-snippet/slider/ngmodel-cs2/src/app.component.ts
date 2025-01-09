import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SliderModule } from '@syncfusion/ej2-angular-inputs'
import { FormsModule } from '@angular/forms'
import { Component } from '@angular/core';

@Component({
  imports: [
    SliderModule,
    FormsModule
  ],
  standalone: true,
  selector: 'my-app',
  template: `
    <div class="container">
      <form #sliderForm="ngForm">
        <div class="form-group">
          <label for="slider">Slider</label>
          <br/> <br/> <br/>
          <ejs-slider class="form-control" id='slider' [ticks]="ticks" [value]="sliderValue" (changed)="onSliderChange($event)" name="slider" required ></ejs-slider>
          <br/> <br/> <br/>
          <input type="number" id="name" name="name" class="form-control" required [(ngModel)]="sliderValue" (ngModelChange)="onInputChange($event)">
        </div>
      </form>
    </div>`,
})

export class AppComponent {
  sliderValue: number = 30;

  public ticks: Object = {
    placement: 'Before',
    largeStep: 20,
    smallStep: 5,
    showSmallTicks: true,
  };

  onSliderChange(args: any) {
    this.sliderValue = args.value;
  }

  onInputChange(value: number) {
    // Ensure the value is within the slider's range if needed
    this.sliderValue = value;
  }
}



