

import { Component, ViewChild } from '@angular/core';
import { NumericTextBoxComponent  } from '@syncfusion/ej2-angular-inputs';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'app-root',
    // Initializes the NumericTextBox
    //Renders submit button for validating the NumericTextBox
    template: `
    <form #formElement class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-6">
                <ejs-numerictextbox #numeric="" id="numeric"  [strictMode]='false'  min='10' max='100' name="numeric" placeholder= 'NumericTextbox' floatLabelType= 'Always'  (created)="onCreate($event)" (change)= "onChange($event)"></ejs-numerictextbox>
            </div>
                <button type="button" id="submit_btn" (click)="btnClick()" style="margin-top: 10px">Submit</button>
        </div>
    </form>
    `
})

export class AppComponent {
    @ViewChild('formElement') element: any;
    @ViewChild('numeric') numeric?: NumericTextBoxComponent | any;
    public formObject?: FormValidator;
    ngAfterViewInit() {
        let customFn: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
            if(this.numeric.value>=10 && this.numeric.value<=100) {
                return true;
            }
            else {
                return false;
            }
        };
        // sets required property in the FormValidator rules collection
        let options: FormValidatorModel = {
            rules: {
               'numericRange': { required: [true, "Number is required"] },
            },
            //to place the error message in custom position
            customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
                (inputElement as HTMLElement | any).parentNode.parentNode.parentNode.appendChild(errorElement);
            }
        };
        this.formObject = new FormValidator(this.element.nativeElement, options);

        this.formObject.addRules('numericRange', { range: [customFn, "Please enter a number between 10 to 100"] });
        var proxy = this;
    }
    // validates NumericTextBox while value changes
    public onChange(args: any){
        if (this.numeric.value != null)
            this.formObject?.validate("numericRange");
    }
    public onCreate(args: any){
          (document.getElementById("numeric") as HTMLElement).setAttribute("name", "numericRange");
    }
    public btnClick(): void {
        // validates the NumericTextBox
        this.formObject?.validate("numericRange");
        // checks for incomplete value and alerts the form
        let ele: HTMLInputElement | any = <HTMLInputElement>document.getElementById('numeric');
            if (ele.value !== "" && ele.value >=10 && ele.value<=100) {
                alert("Submitted");
            }
    }
}



