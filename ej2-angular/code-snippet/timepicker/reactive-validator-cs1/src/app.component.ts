

import { Component, ViewChild, OnInit, ElementRef, Inject } from '@angular/core';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './template.html'
})

export class AppComponent implements OnInit {
    @ViewChild('ejTimePicker') ejTimePicker?: TimePickerComponent;
    public targetElement?: HTMLElement;
    public placeholder: String = 'Select a time';
    skillForm?: FormGroup | any;
    build: FormBuilder;
    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
        this.build = builder;
        this.createForm();
    }
    ngOnInit(): void {
        
    }
    createForm() {
        this.skillForm = this.build.group({
            timepicker: ['', Validators.required],
            username: ['', Validators.required],
            usermail: ['', Validators.email],
        });
    }
    get username() {
        return this.skillForm?.get('username');
    }
    get timepicker() {
        return this.skillForm?.get('timepicker');
    }
    get usermail() {
        return this.skillForm?.get('usermail');
    }

    onSubmit() {
        alert("Form Submitted!");
    }
}



