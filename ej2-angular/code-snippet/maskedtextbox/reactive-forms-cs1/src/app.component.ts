import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskedTextBoxModule, MaskedTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    imports: [FormsModule, ReactiveFormsModule, MaskedTextBoxModule, ButtonModule. CommonModule],
    standalone: true,
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
        alert("You have entered the value: " + this.mask?.value);
    }
}
