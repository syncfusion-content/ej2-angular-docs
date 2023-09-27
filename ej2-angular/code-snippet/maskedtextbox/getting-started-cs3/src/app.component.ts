

import { Component, ViewChild } from '@angular/core';
import { MaskedTextBoxComponent  } from '@syncfusion/ej2-angular-inputs';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'app-root',
    // sets mask format to the MaskedTextBox
    template: `
        <form #formElement class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-6">
                <br/><ejs-maskedtextbox id="masktextbox" #mask="" mask='000-000-0000' name="mask_value" placeholder= 'Mobile Number' floatLabelType= 'Always'></ejs-maskedtextbox>
            </div>
                <button type="button" id="submit_btn" (click)="btnClick()" style="margin-top: 10px">Submit</button>
        </div>
    </form>`
})

export class AppComponent {
    @ViewChild('formElement') element?: any;
    @ViewChild('mask') mask?: MaskedTextBoxComponent;
    public formObject?: FormValidator;
    ngAfterViewInit() {
        let customFn: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
        let argsLength = (args as any).element.ej2_instances[0].value.length;
        if(argsLength != 0) {
            return argsLength >= 10;
        }
        else {
            return true;
        }
        };

        let custom: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
        let argsLength = (args as any).element.ej2_instances[0].value.length;
        if(argsLength == 0) {
            return 0;
        }
        else {
            return argsLength;
        }
        };

        // sets required property in the FormValidator rules collection
        let options: FormValidatorModel = {
            rules: {
                'mask_value': { numberValue: [customFn, 'Enter valid mobile number'] },
            }
        }
        this.formObject = new FormValidator(this.element.nativeElement, options);

        //FormValidator rule is added for empty MaskedTextBox
        this.formObject.addRules('mask_value', { maxLength: [custom, 'Enter mobile number'] });
        // places error label outside the MaskedTextBox using the customPlacement event of FormValidator
        let customPlace: (element: HTMLElement, error: HTMLElement) => void = (element: HTMLElement, error: HTMLElement) => {
            (document.querySelector(".form-group") as Element).appendChild(error);
        };
        this.formObject.customPlacement = customPlace;
    }
    public btnClick(): void {
        // validates the MaskedTextBox
        this.formObject?.validate("mask_value");
        // checks for incomplete value and alerts the formt submit
        if (this.mask?.element.value !== "" && this.mask?.element.value.indexOf(this.mask.promptChar) === -1) {
            alert("Submitted");
        }
    }
}


