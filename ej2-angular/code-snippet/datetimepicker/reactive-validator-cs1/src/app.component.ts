

import { Component, ViewChild, OnInit, ElementRef, Inject } from '@angular/core';
import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './template.html'
})

export class AppComponent implements OnInit {
    @ViewChild('ejDateTimePicker') ejDateTimePicker?: DateTimePickerComponent;
    public targetElement?: HTMLElement;
    public placeholder: String = 'Select date and time';
    skillForm?: FormGroup;
    build: FormBuilder;
    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
        this.build = builder;
        this.createForm();
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    createForm() {
        this.skillForm = this.build.group({
            datetimepicker: ['', Validators.required],
            username: ['', Validators.required],
            usermail: ['', Validators.email],
        });
    }
    get username() {
        return this.skillForm?.get('username');
    }
    get datetimepicker() {
        return this.skillForm?.get('datetimepicker');
    }
    get usermail() {
        return this.skillForm?.get('usermail');
    }

    onSubmit() {
        alert("Form Submitted!");
    }
}



