

import { Component, Inject } from '@angular/core';
import {MaskedTextBoxComponent  } from '@syncfusion/ej2-angular-inputs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './template.html',
})
export class AppComponent {
    skillForm?: FormGroup | any;
    build: FormBuilder;
    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
        this.build = builder;
        this.createForm();
    }
    createForm() {
        this.skillForm = this.build.group({
          mask: ['', Validators.required],
          username: ['', Validators.required],
        });
    }
    get username() { return this.skillForm?.get('username'); }
    get mask() { return this.skillForm?.get('mask'); }

    onSubmit() {
      alert("You have entered the value: " + this.mask?.value );
  }
}



