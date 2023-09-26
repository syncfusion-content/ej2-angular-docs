

import { Component, ViewChild, OnInit } from '@angular/core';
import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'app-root',
    template: `<form id="form-element" class="form-vertical">
    <ejs-datetimepicker #ejDateTime id='datetimepicker' placeholder='Enter date and time' width="275px"(blur)="onFocusOut()" (change)= "onChange($event)"></ejs-datetimepicker>
    </form>`
})

export class AppComponent implements OnInit {
    @ViewChild('formElement') element: any;
    @ViewChild('ejDateTime') ejDateTime?: DateTimePickerComponent;
    public formObject?: FormValidator;
    ngOnInit() {
        // custom validator function.
        let customFn: (args: {
            [key: string]: string
        }) => boolean = (args: {
            [key: string]: string
        }) => {
            return (((this.ejDateTime as DateTimePickerComponent ).value).getFullYear() > 1990 && ((this.ejDateTime as DateTimePickerComponent ).value).getFullYear() < 2020);
        };
        let options: FormValidatorModel = {
            rules: {
                'datetimepicker': {
                    required: [true, "Value is required"]
                }
            },
            customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
                inputElement?.parentElement?.parentElement?.appendChild(errorElement);
            }
        };
        this.formObject = new FormValidator('#form-element', options);
        this.formObject.addRules('datetimepicker', {
            range: [customFn, "Please select a date between years from 1990 to 2020"]
        });
        this.formObject = new FormValidator('#form-element', options);
    }
    // Form validation takes place when focus() event of datetimepicker is triggered.
    public onFocusOut(): void {
        this.formObject?.validate("datetimepicker");
    }
    // Custom validation takes place when value is changed.
    public onChange(args: any) {
        if (this.ejDateTime?.value != null)
            this.formObject?.validate("datetimepicker");
    }
}


