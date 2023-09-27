


import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
      <form #sliderForm="ngForm">
        <div class="form-group">

          <label for="slider">Slider</label>
          <br/> <br/> <br/>
          <ejs-slider class="form-control" id='slider' [ticks]="ticks" [(ngModel)]="slidervalue" name="slider" required #slider="ngModel"></ejs-slider>
          <br/> <br/> <br/>
          <input type="number" id="name" name="name" class="form-control" required [(ngModel)]="slidervalue" #slider="ngModel">
        </div>
      </form>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
    slidervalue = "30";
  public ticks: Object = {
    placement: 'Before',
    largeStep: 20,
    smallStep: 5,
    showSmallTicks: true
  };
}



