

import { Component,ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';

class User {
    public date?: Date
    constructor() {
        
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './template.html'
})
export class DefaultDatePickerComponent {

    user?: User | any;
    ngOnInit() {
        this.user = new User();
    }

    onSubmit(userForm: any) {
        (userForm.valid) ? alert("submitted"): alert("form is invalid");
    }

}


