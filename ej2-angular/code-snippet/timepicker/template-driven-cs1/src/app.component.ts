import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { CommonModule } from '@angular/common';
import { Component,ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';

class User {
    constructor() {
        
    }
}

@Component({
imports: [FormsModule, ReactiveFormsModule, TimePickerModule, CommonModule],
standalone: true,
    selector: 'app-root',
    templateUrl: './template.html'
})
export class AppComponent {
    public time?: Date
    user?: User | any;
    ngOnInit() {
        this.user = new User();
    }
    onSubmit(userForm:any) {
        (userForm.valid) ? alert("submitted"): alert("form is invalid");
    }
}



