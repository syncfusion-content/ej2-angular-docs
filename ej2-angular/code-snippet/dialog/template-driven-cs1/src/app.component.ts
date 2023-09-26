


import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { isNullOrUndefined, EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  template: `<div class="control-section">
        <div class="col-lg-12">
        <div class="control_wrapper" id="control_wrapper" style="margin: 10px auto;">
         <ejs-dialog id="FormDialog" #FormDialog width= '450px'
          [showCloseIcon]='false' target='.control-section'>
        <ng-template #content>
            <form id="template_driven" #userForm="ngForm" novalidate>
                <div class="form-group" style="padding-top: 11px;">
                    <div class="e-float-input">
                        <input type="text" id="name" #nameval='ngModel' name="name" required ngModel>
                        <span class="e-float-line"></span>
                        <label class="e-float-text e-label-top" for="name">Name</label>
                        <div *ngIf="(nameval.invalid && (nameval.dirty || nameval.touched))">
                            <div class="e-error" *ngIf="nameval.errors!['required']">
                                * Enter your name
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group" style="padding-top: 11px;">
                    <div class="e-float-input">
                        <input type="text" id="email" #emailval='ngModel' name="email" required ngModel>
                        <span class="e-float-line"></span>
                        <label class="e-float-text e-label-top" for="email">Email</label>
                        <div *ngIf="(emailval.invalid && (emailval.dirty || emailval.touched))">
                            <div class="e-error" *ngIf="emailval.errors!['required']">
                                * Enter your email address
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group" style="padding-top: 11px;">
                    <div class="e-float-input">
                        <input type="number" id="contact" #contactval='ngModel' name="contact" required ngModel>
                        <span class="e-float-line"></span>
                        <label class="e-float-text e-label-top" for="contact">Contact No</label>
                        <div *ngIf="(contactval.invalid && (contactval.dirty || contactval.touched))">
                            <div class="e-error" *ngIf="contactval.errors!['required']">
                                * Enter your contact number
                            </div>
                        </div>
                    </div>
                </div>

                <div class="selected-files">
                  <div class="textboxes">
                    <div class="form-group" style="padding-top: 11px; width:">
                          <div class="e-float-input upload-area">
                              <input type="text" id="upload" #uploadval='ngModel' [(ngModel)]="uploadInput" readonly name="upload" required ngModel>
                              <span class="e-float-line"></span>
                              <label class="e-float-text e-label-top" for="upload">Choose a file</label>
                          </div>
                      </div>
                  </div>
                  <div class="uploader-section">
                      <button id="browse" class="e-control e-btn e-info" (click)='browseClick()'>Browse...</button>
                      <ejs-uploader #defaultupload id='fileupload' allowedExtensions="image/*" [autoUpload]=false [multiple]='multiple' (selected)='onFileSelect($event)'></ejs-uploader>
                  </div>
                </div>
                <span class='error-root' *ngIf="(uploadval.invalid && (uploadval.dirty || uploadval.touched))">
                    <span class="e-error errorClass" *ngIf="uploadval.errors!['required']">
                        * Select a file
                    </span>
                </span>
                <div class="form-group" style="padding-top: 11px;">
                  <div class="submitBtn">
                      <button class="submit-btn e-btn" id="submit-btn" [disabled]="userForm.invalid" type="reset" (click)= "Submit()">Submit</button>
                      <div class="desc"><span>*This button is not a submit type and the form submit handled from externally.</span></div>
                  </div>
                </div>
          </form>
          </ng-template>
          </ejs-dialog>

    </div>
  </div>
</div>
         <ejs-dialog id="confirmationDialog" #Dialog [buttons]='dlgButtons' [animationSettings]='animationSettings' [header]='formHeader' [showCloseIcon]='showCloseIcon' [content]='contentData'  [target]='target' [width]='width' [visible]="visible" [isModal]="isModal" >
          </ejs-dialog>`
})
export class AppComponent  {
  @ViewChild('formUpload')
  public uploadObj?: UploaderComponent;
  @ViewChild('Dialog')
  public dialogObj?: DialogComponent;
  public width: string = '335px';
  public visible: boolean = false;
  public multiple: boolean = false;
  public showCloseIcon: Boolean = true;
  public formHeader: string = 'Success';
  public contentData: string = 'Your details have been updated successfully, Thank you.';
  public target: string = '#FormDialog';
  public isModal: boolean = true;
  public animationSettings: object = {
    effect: 'Zoom'
  };
  public uploadInput: string = '';
  public dlgBtnClick: EmitType<object> = () => {
    this.dialogObj!.hide();
  }
  public dlgButtons: Object[] = [{ click: this.dlgBtnClick.bind(this), buttonModel: { content: 'Ok', isPrimary: true } }];
    @ViewChild('formElement') element: any;

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
   this.dialogObj!.show();
 }
}



