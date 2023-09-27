


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
      <form #sliderForm="ngForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="slider">Slider</label>
        <ejs-slider name = "slider" id='default' type="MinRange" slider-validate [(ngModel)] ='value' required></ejs-slider>
    
          <div *ngIf="sliderForm.invalid">
            slider has <b><i>invalid </i> </b> value and choose value greater than 10.
          </div>
          <div *ngIf="sliderForm.valid">
            Slider has <b><i>valid </i> </b> value {{value}}.
          </div>
          <br />
          <div *ngIf="sliderForm.pristine">
            Slider having state <b><i>pristine.</i></b> Slider value not yet changed by user.
          </div>
          <div *ngIf="sliderForm.dirty">
            Slider having state <b><i>dirty.</i> </b> Slider value changed by user.
          </div>
          <br />
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
    styleUrls:['./index.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('sliderForm') form?: NgForm;
  validated: any;
  public value =70;
  onSubmit() {
    this.validated = true;
    console.log(this.form?.valid)
  }

  ngOnInit() {
  
  }
}



