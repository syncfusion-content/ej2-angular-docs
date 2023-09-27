


import { Component, ViewChild } from '@angular/core';
import { EmitType } from '@syncfusion/ej2-base';
import { Dialog } from '@syncfusion/ej2-popups';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
/**
 * Default Uploader Default Component
 */
@Component({
    selector: 'app-root',
    templateUrl: './formsupport.html',
    styleUrls: ['./formsupport.css']
})
export class AppComponent {
    @ViewChild('Dialog')
    public Dialog?: DialogComponent;
    public width: string = '335px';
    public visible: boolean = false;
    public content: string = 'Your details has been updated successfully, Thank you';
    public target: string = '#control_wrapper';
    public isModal: boolean = true;
    public animationSettings: object = {
            effect: 'Zoom'
        }
    public options: object = {
            rules: {
            'name': {
                required: true
            },
            'email': {
                required: true
            },
            'upload': {
                required: true
            }
            }
        }

        @ViewChild('formElement') element: any;

        ngAfterViewInit() {
          let formObject: FormValidator = new FormValidator(this.element.nativeElement, this.options);
        // validate all input elements in the form
            }

     browseClick() {
        (document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button') as HTMLButtonElement).click(); return false;
      }
    Submit() {
            this.onFormSubmit();
    }
    public onFileSelect: EmitType<Object> = (args: any) => {
        let inputElement: HTMLInputElement  = document.getElementById('upload') as HTMLInputElement;
        inputElement.value = args.filesData[0].name;
    }

    // Close the modal Dialog on overlay click
    public overlayClick(): void {
        this.Dialog?.hide();
    }

    public onFormSubmit(): void {
    let formObject: FormValidator = new FormValidator("#form1", this.options);
    let formStatus: Boolean = formObject.validate();
    if (formStatus) {
       formObject.element.reset();
        this.Dialog?.show();
    }
    }
}



