

import { Component,ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';

class User {
    constructor() {
        
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './template.html'
})
export class DefaultTimePickerComponent {
    public time?: Date
    user?: User | any;
    ngOnInit() {
        this.user = new User();
    }
    onSubmit(userForm:any) {
        (userForm.valid) ? alert("submitted"): alert("form is invalid");
    }
}



