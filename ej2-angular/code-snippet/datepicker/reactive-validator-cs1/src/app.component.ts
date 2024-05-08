import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, ViewChild, OnInit, ElementRef, Inject } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
imports: [
        FormsModule, ReactiveFormsModule, DatePickerModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    templateUrl: './template.html'
})
export class AppComponent implements OnInit {
    @ViewChild('ejDatePicker') ejDatePicker?: DatePickerComponent;
    public targetElement?: HTMLElement;
    public placeholder: String = 'Date of Birth';
    skillForm?: FormGroup | any;
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
            datepicker: ['', Validators.required],
            username: ['', Validators.required],
            usermail: ['', Validators.email],
        });
    }
    get username() {
        return (this.skillForm as FormGroup<any> | any).get('username');
    }
    get datepicker() {
        return (this.skillForm as FormGroup<any> | any).get('datepicker');
    }
    get usermail() {
        return (this.skillForm as FormGroup<any> | any).get('usermail');
    }

    onSubmit() {
        alert("Form Submitted!");
    }
}


