

import { Component, Inject } from '@angular/core';
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
          numeric: ['', Validators.required],
          username: ['', Validators.required],
        });
    }
    get username() { return this.skillForm?.get('username'); }
    get numeric() { return this.skillForm?.get('numeric'); }

    onSubmit() {
       alert("You have entered the value: " + this.numeric?.value );
  }
}



