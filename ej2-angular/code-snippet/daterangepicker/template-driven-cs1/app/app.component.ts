

import { Component,ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';

class User {
    public range?: Date[];
    constructor() {
    }
}

@Component({
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



