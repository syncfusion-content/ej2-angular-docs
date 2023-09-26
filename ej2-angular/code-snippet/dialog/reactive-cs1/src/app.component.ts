

import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmitType } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-root',
  template: `<div class="control-section">
    <div class="col-lg-12">
        <div class="control_wrapper" id="control_wrapper" style="margin: 25px auto;">
        <ejs-dialog id="reactDialog" #FormDialog width= '450px'
          [showCloseIcon]='false' target='.control-section'>
          <form id="reactive" [formGroup]="form">
              <div class="form-group" style="padding-top: 11px;">
                  <div class="e-float-input">
                      <input type="text" id="name" name="name" class="required" formControlName="name">
                      <span class="e-float-line"></span>
                      <label class="e-float-text e-label-top" for="name">Name</label>
                  </div>
                  <app-field-error-display [displayError]="isFieldValid('name')" errorMsg="* Please Enter your name">
                  </app-field-error-display>
              </div>

              <div class="form-group" style="padding-top: 11px;">
                  <div class="e-float-input">
                      <input type="text" id="email" name="email" class="required" formControlName="email">
                      <span class="e-float-line"></span>
                      <label class="e-float-text e-label-top" for="email">Email</label>
                  </div>
                  <app-field-error-display [displayError]="isFieldValid('email')" errorMsg="* * Enter your email address">
                  </app-field-error-display>
              </div>

              <div class="form-group" style="padding-top: 11px;">
                  <div class="e-float-input">
                      <input type="number" id="contact" name="contact" class="required" formControlName="contact">
                      <span class="e-float-line"></span>
                      <label class="e-float-text e-label-top" for="contact">Contact No</label>
                  </div>
                  <app-field-error-display [displayError]="isFieldValid('contact')" errorMsg="* Enter your contact number">
                  </app-field-error-display>
              </div>

              <div class="form-group upload-area" style="padding-top: 11px;">
                  <div class="e-float-input upload-area">
                      <input type="text" id="upload" name="upload" [(ngModel)]="uploadInput" readonly formControlName="upload" class="required">
                      <span class="e-float-line"></span>
                      <label class="e-float-text e-label-top" for="upload">Choose a file</label>
                  </div>
                  <button id="browse" class="e-control e-btn e-info" (click)='browseClick()'>Browse...</button>
                  <ejs-uploader #defaultupload id='fileupload' allowedExtensions="image/*" [autoUpload]=false [multiple]='multiple' (selected)='onFileSelect($event)'></ejs-uploader>
                  <app-field-error-display [displayError]="isFieldValid('upload')" errorMsg="* Select any file">
                  </app-field-error-display>
              </div>
              <div class="form-group" style="padding-top: 11px;">
                <div class="submitBtn">
                  <button class="submit-btn e-btn" id="submit-btn" [disabled]="form!.invalid" (click)= "Submit()">Submit</button>
                  <div class="desc"><span>*This button is not a submit type and the form submit handled from externally.</span></div>
                </div>
              </div>
          </form>
          </ejs-dialog>
      </div>
    </div>
</div>
  <ejs-dialog id="confirmationDialog" #Dialog [buttons]='dlgButtons' [animationSettings]='animationSettings' [header]='formHeader' [showCloseIcon]='showCloseIcon' [content]='contentData'  [target]='target' [width]='width' [visible]="visible" [isModal]="isModal" >
   </ejs-dialog>`
})
export class AppComponent  {
    @ViewChild('defaultupload')
    public uploadObj?: UploaderComponent;
    @ViewChild('Dialog')
    public dialogObj?: DialogComponent;
    public form?: FormGroup | any;
    public width: string = '335px';
    public visible: boolean = false;
    public multiple: boolean = false;
    public showCloseIcon: Boolean = true;
    public formHeader: string = 'Success';
    public contentData: string = 'Your details have been updated successfully, Thank you.';
    public target: string = '#reactDialog';
    public isModal: boolean = true;
    public animationSettings: any = {
          effect: 'Zoom'
      };
   private formSumitAttempt: boolean | any;
   public dlgBtnClick: EmitType<object> = () => {
    this.dialogObj!.hide();
  }
  public dlgButtons: Object[] = [{ click: this.dlgBtnClick.bind(this), buttonModel: { content: 'Ok', isPrimary: true } }];
  public uploadInput: string = '';
  public browseClick() {
      document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button')!.click(); return false;
    }
  public Submit(): void {
    this.onFormSubmit();
  }
  public onFileSelect: EmitType<Object> = (args: any) => {
    this.uploadInput = args.filesData[0].name;
  }

  public onFormSubmit(): void {
    this.formSumitAttempt = true;
    if (this.form!.valid) {
      this.dialogObj!.show();
      this.form!.reset();
    } else {
      this.validateAllFormFields(this.form!);
    }
  }

  constructor(@Inject(FormBuilder) public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      contact: [null, Validators.required],
      upload: [null, Validators.required],
    });
  }

  isFieldValid(field: string) {
    return (((!this.form as any).get(field).valid && (this.form as any).get(field).touched) ||
    ((this.form as any).get(field).untouched && this.formSumitAttempt));
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}



