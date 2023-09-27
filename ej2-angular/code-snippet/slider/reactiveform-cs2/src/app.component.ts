


import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SliderComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
      <form [formGroup]="sliderForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="slider">Slider</label>
          <ejs-slider formControlName="slider" id='sliderelement' [(ngModel)]="value" type="MinRange" required></ejs-slider>
    
          <div *ngIf="sliderForm.invalid">
            slider has <b><i>invalid </i> </b> value and choose value greater than 10.
          </div>
          <div *ngIf="sliderForm.valid">
            Slider has <b><i>valid </i> </b> value {{value}}.
          </div><br/>
          <div *ngIf="sliderForm.pristine">
            Slider having state <b><i>pristine.</i></b> Slider value not yet changed by user.
          </div>
          <div *ngIf="sliderForm.dirty">
            Slider having state <b><i>dirty.</i> </b> Slider value changed by user.
          </div><br/>
          <div *ngIf="sliderForm.untouched">
            Slider having state <b><i>untouched.</i></b> Slider has not visited by user.
          </div>
          <div *ngIf="sliderForm.touched">
            Slider having state <b><i>touched.</i> </b> Slider has been visited by user.
          </div>
          <br/>
          <button [disabled]="sliderForm.invalid"  type="submit">submit</button><br/><br/>
          <div class="formresult" [hidden]="!validated">
          Slider value choosen as: {{value}}
          </div>
        </div>
      </form>
    </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
  value;
  slidervalue?: SliderComponent;
  validated = false;
  sliderForm: FormGroup;
  constructor(@Inject(FormBuilder) public fb: FormBuilder) {
    this.value = 30;
    this.sliderForm = this.fb.group({
      'slider': [0, Validators.min(10)]
    });
  }
  onSubmit() {
    if (this.sliderForm.valid) {
      this.validated = true;
      console.log('form submitted');
      console.log(this.sliderForm.value.slider);
    }

  }
}



