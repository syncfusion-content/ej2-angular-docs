import { Component,ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {TextAreaComponent} from '@syncfusion/ej2-inputs';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <div class='textarea'>
                  <div className="control_wrapper" id="control_wrapper">
                    <h3 className="form-title">Feedback</h3>
                    <div className="control_wrapper textarea-form">
                        <form id="form-element" method="post">
                            <div className="form-group">
                                <div className="e-float-input">
                                    <label>Email</label>
                                    <input type="email" id="email" name="email" data-email-message="Please enter valid email address."
                                    data-required-message="Required field" required data-msg-containerid="emailError"/>
                                    <span className="e-float-line"></span>
                                </div>
                                <div id="emailError"></div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label>Comments</label>
                                    <br/>
                                    <ejs-textarea id='default' name="comments" data-msg-containerid="commentError" placeholder='Enter your comments' floatLabelType='Auto' required =""></ejs-textarea>
                                </div>
                                <div id="commentError"></div>
                            </div>
                            <div className="row">
                                <div style="float: left;">
                                    <button className="btn" type="submit">Submit</button>
                                </div>
                                <div style="float: left;">
                                    <button className="btn" type="reset">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </div>`
})

export class AppComponent {
    @ViewChild('form-element') element?: any;
    @ViewChild('default') mask?: TextAreaComponent;
    public formObject?: FormValidator;
    ngAfterViewInit() {
        // sets required property in the FormValidator rules collection
        let options: FormValidatorModel = {
          rules: {
             'email': { required: [true, "* Please enter valid email"] },
             'comments': {required: [true, "* Please enter your comments"]}
          },
          //to place the error message in custom position
          customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
              (inputElement as HTMLElement | any).parentNode.parentNode.parentNode.appendChild(errorElement);
          }
      };
      this.formObject = new FormValidator(this.element.nativeElement, options);
      var proxy = this;
    }

 }


