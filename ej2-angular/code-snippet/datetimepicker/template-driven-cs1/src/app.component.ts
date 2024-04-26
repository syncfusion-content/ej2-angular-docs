import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars'



import { Component,ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';

class User {
    public datetime?: Date;
    constructor() {
    }
}

@Component({
imports: [ FormsModule, ReactiveFormsModule,  DateTimePickerModule],


standalone: true,
    selector: 'app-root',
    templateUrl: './template.html'
})
export class DefaultDateTimePickerComponent {
    constructor() {}
    user?: User | any;
    ngOnInit() {
        this.user = new User();
    }

    onSubmit(userForm: any) {
        (userForm.valid) ? alert("submitted"): alert("form is invalid");
    }

}


