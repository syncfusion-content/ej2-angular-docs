

import { Component, ViewChild, OnInit } from '@angular/core';
import { DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'app-root',
    template: `<form id="form-element" class="form-vertical">
    <ejs-daterangepicker #ejDateRange id='daterangepicker' placeholder='Enter a date range' width="275px"(blur)="onFocusOut()" (change)= "onChange($event)"></ejs-daterangepicker>
    </form>`
})

export class AppComponent implements OnInit {
    @ViewChild('formElement') element: any;
    @ViewChild('ejDateRange') ejDateRange?: DateRangePickerComponent;
    public formObject?: FormValidator;
    ngOnInit() {
        let customFn: (args: {
            [key: string]: string
        }) => boolean = (args: {
            [key: string]: string
        }) => {
            return ((this.ejDateRange as any ).value[0]).getFullYear() > 1990 && ((this.ejDateRange as DateRangePickerComponent | any).value[1]).getFullYear() < 2020;
            };
            let options: FormValidatorModel = {
                rules: {
                    'daterangepicker': {
                        required: [true, "Value is required"]
                    }
                },
                customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
                    inputElement?.parentElement?.parentElement?.appendChild(errorElement);
                }
            };
            this.formObject = new FormValidator('#form-element', options);
            this.formObject.addRules('daterangepicker', {
                range: [customFn, "Please select a date range between years from 1990 to 2020"]
            });
            this.formObject = new FormValidator('#form-element', options);
        }
        public onFocusOut(): void {
            this.formObject?.validate("daterangepicker");
        }

        public onChange(args: any) {
            if (this.ejDateRange?.value != null)
                this.formObject?.validate("daterangepicker");
        }
    }



