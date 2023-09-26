

import { Component, ViewChild, OnInit } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
@Component({
    selector: 'app-root',
    template: `<form id="form-element" class="form-vertical">
    <ejs-datepicker #ejDate id='datepicker' placeholder='Enter date' width="275px"(blur)="onFocusOut()" (change)= "onChange($event)"></ejs-datepicker>
    </form>`
})
export class AppComponent implements OnInit {
    @ViewChild('formElement') element: any;
    @ViewChild('ejDate') ejDate?: DatePickerComponent;
    public formObject?: FormValidator;
    ngOnInit() {
        // custom validator function.
        let customFn: (args: {
            [key: string]: string
        }) => boolean = (args: {
            [key: string]: string
        }) => {
            return (((this.ejDate as DatePickerComponent ).value).getFullYear() > 1990 && ((this.ejDate as DatePickerComponent ).value).getFullYear() < 2020);
        };
        let options: FormValidatorModel = {
            rules: {
                'datepicker': {
                    required: [true, "Value is required"]
                }
            },
            customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
                inputElement.parentElement?.parentElement?.appendChild(errorElement);
            }
        };
        this.formObject = new FormValidator('#form-element', options);
        this.formObject.addRules('datepicker', {
            range: [customFn, "Please select a date between years from 1990 to 2020"]
        });
        this.formObject = new FormValidator('#form-element', options);
    }
    // Form validation takes place when focus() event of DatePicker is triggered.
    public onFocusOut(): void {
        this.formObject?.validate("datepicker");
    }
    // Custom validation takes place when value is changed.
    public onChange(args: any) {
        if (this.ejDate?.value != null)
            this.formObject?.validate("datepicker");
    }
}



