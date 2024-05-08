import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars'



import { Component,ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';

class User {
    public range?: Date[];
    constructor() {
    }
}

@Component({
imports: [ FormsModule, ReactiveFormsModule,  DateRangePickerModule],


standalone: true,
    selector: 'app-root',
    templateUrl: './template.html'
})
export class DefaultDateRangePickerComponent {

    user?: User | any;
    ngOnInit() {
        this.user = new User();
    }

    onSubmit(userForm: any) {
        (userForm.valid) ? alert("submitted"): alert("form is invalid");
    }
}



