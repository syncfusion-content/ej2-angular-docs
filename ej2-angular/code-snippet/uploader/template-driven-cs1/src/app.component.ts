


import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  template: `<div class="control-section">
        <div class="col-lg-12">
          <h4 class="form-title">Photo Contest</h4>
        <div class="control_wrapper" id="control_wrapper" style="margin: 10px auto;">
            <form id="template_driven" #userForm="ngForm" novalidate>
                <div class="form-group" style="padding-top: 11px;">
                    <div class="e-float-input">
                        <input type="text" id="name" #nameval='ngModel' name="name" required ngModel>
                        <span class="e-float-line"></span>
                        <label class="e-float-text e-label-top" for="name">Name</label>
                        <div *ngIf="(nameval.invalid && (nameval.dirty || nameval.touched))">
                            <div class="e-error" *ngIf="nameval.errors">
                                * Enter your name
                            </div>
                        </div>
                    </div>
                </div>
                  <div class="form-group" style="padding-top: 11px;">
                      <div class="e-float-input upload-area">
                          <input type="text" id="upload" #uploadval='ngModel' [(ngModel)]="uploadInput" readonly name="upload" required ngModel>
                          <button id="browse" class="e-control e-btn e-info" (click)='browseClick()'>Browse...</button>
                          <span class="e-float-line"></span>
                          <label class="e-float-text e-label-top" for="upload">Choose a file</label>
                          <div *ngIf="(uploadval.invalid && (uploadval.dirty || uploadval.touched))">
                              <div class="e-error" *ngIf="uploadval.errors">
                                  * Select a file
                              </div>
                          </div>
                      </div>
                      <ejs-uploader #defaultupload id='fileupload' allowedExtensions="image/*" [autoUpload]=false [multiple]='multiple' (selected)='onFileSelect($event)'></ejs-uploader>
                  </div>

                  <div class="form-group" style="padding-top: 11px;">
                    <div class="submitBtn">
                        <button class="submit-btn e-btn" id="submit-btn" [disabled]="userForm.invalid" type="reset" (click)= "Submit()">Submit</button>
                        <div class="desc"><span>*This button is not a submit type and the form submit handled from externally.</span></div>
                    </div>
                  </div>
          </form>
          <ejs-dialog id="confirmationDialog" #Dialog [buttons]='dlgButtons' [animationSettings]='animationSettings' [header]='formHeader' [showCloseIcon]='showCloseIcon' [content]='content'  [target]='target' [width]='width' [visible]="visible" [isModal]="isModal" >
          </ejs-dialog>
    </div>
  </div>
</div>`
})
export class AppComponent  {
  @ViewChild('Dialog')
  public dialogObj?: DialogComponent;
  public width: string = '335px';
  public visible: boolean = false;
  public multiple: boolean = false;
  public showCloseIcon: Boolean = true;
  public formHeader: string = 'Success';
  public content: string = 'Your details have been updated successfully, Thank you.';
  public target: string = '#control_wrapper';
  public isModal: boolean = true;
  public animationSettings: object = {
    effect: 'Zoom'
  };
  public uploadInput: string = '';
  public dlgBtnClick: EmitType<object> = () => {
    (this.dialogObj as DialogComponent).hide();
  }
  public dlgButtons: Object[] = [{ click: this.dlgBtnClick.bind(this), buttonModel: { content: 'Ok', isPrimary: true } }];
    @ViewChild('formElement') element: any;

  public browseClick() {
     (document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button') as HTMLButtonElement).click(); return false;
   }
   public Submit(): void {
    this.onFormSubmit();
  }
 public onFileSelect: EmitType<Object> = (args: any) => {
  this.uploadInput = args.filesData[0].name;
 }

 public onFormSubmit(): void {
   (this.dialogObj as DialogComponent).show();
 }
}



