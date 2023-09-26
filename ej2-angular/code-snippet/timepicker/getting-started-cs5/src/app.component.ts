

import { Component, ViewChild, OnInit } from '@angular/core';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'app-root',
    template: `<form id="form-element" class="form-vertical">
    <ejs-timepicker #ejTime id='timepicker' placeholder='Select a time' width="275px"(blur)="onFocusOut()" (change)= "onChange($event)"></ejs-timepicker>
    </form>`
})

export class AppComponent implements OnInit {
    @ViewChild('formElement') element: any;
    @ViewChild('ejTime') ejTime: any;
    public formObject?: FormValidator;
    ngOnInit() {
        // custom validator function.
        let customFn: (args: {
            [key: string]: string
        }) => boolean = (args: {
            [key: string]: string
        }) => {
            return ((this.ejTime.value).getHours() < 10);
        };
        let options: FormValidatorModel = {
            rules: {
                'timepicker': {
                    required: [true, "Value is required"]
                }
            },
            customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
                inputElement.parentElement?.appendChild(errorElement);
            }
        };
        this.formObject = new FormValidator('#form-element', options);
        this.formObject.addRules('timepicker', {
            range: [customFn, "Please select a time between 12:00 AM to 10:00 AM"]
        });
        this.formObject = new FormValidator('#form-element', options);
    }
    // Form validation takes place when focus() event of timepicker is triggered.
    public onFocusOut(): void {
        this.formObject?.validate("timepicker");
    }
    // Custom validation takes place when value is changed.
    public onChange(args: any) {
        if (this.ejTime.value != null)
            this.formObject?.validate("timepicker");
    }
}



