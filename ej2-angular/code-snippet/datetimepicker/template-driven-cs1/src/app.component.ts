

import { Component,ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';

class User {
    public datetime?: Date;
    constructor() {
    }
}

@Component({
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


