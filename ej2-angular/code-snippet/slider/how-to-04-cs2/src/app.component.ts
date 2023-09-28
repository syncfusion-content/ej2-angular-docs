


import { Component,ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { SliderComponent } from '@syncfusion/ej2-angular-inputs';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
      <div class="content-wrapper" style="margin-bottom: 25px">
        <div class="form-title">
          <span>Slider Form Validation</span>
        </div>
        <form #formId class="form-horizontal">
          <div class="form-group">
            <div class="e-float-input">
              <ejs-slider id='default' #default name='slider' [value]=20 (changed)='onChanged()'
                [ticks]='ticks'></ejs-slider>
            </div>
          </div>
            </form>
            <button ejs-button isPrimary="true" type="submit" id="submit_btn" (click)="btnClick($event)">Submit</button>
      </div>
    </div>`,
    styleUrls:['./index.css'],
    encapsulation: ViewEncapsulation.None

})
export class AppComponent {
    @ViewChild('formId') element: any;
    @ViewChild('default') sliderObj?: SliderComponent;
    public formObject?: FormValidator;
    public ticks: Object = {
        placement: 'Before',
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
    };
    ngAfterViewInit() {
      let options: FormValidatorModel = {
        rules: {
          'slider': {
            validateHidden: true,
            min: [30, "You must select value greater than 30"]
          }
        }
      };

      this.formObject = new FormValidator(this.element.nativeElement, options);
    }

    public btnClick(args: any): void {
      if ((this.sliderObj as any).value < 5) {
        alert("Please select value greater than 30");
      } else {
        alert("Submitted");
        this.element.nativeElement.submit();
      }
    }
    public onChanged(): void {
      this.formObject?.validate();
    }
}



