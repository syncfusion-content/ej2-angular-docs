
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { CommonModule } from '@angular/common'
import { Component, Inject } from '@angular/core';
@Component({
    imports: [CommonModule,
        FormsModule, ReactiveFormsModule, MultiSelectModule, ButtonModule,
    ],
    standalone: true,
    selector: 'app-root',
    templateUrl: 'form-support.html'
})
export class AppComponent {
    // defined the array of data
    public skillset: string[] = [
        'ASP.NET', 'ActionScript', 'Basic',
        'C++', 'C#', 'dBase', 'Delphi',
        'ESPOL', 'F#', 'FoxPro', 'Java',
        'J#', 'Lisp', 'Logo', 'PHP'
    ];
    public placeholder: String = 'e.g: ActionScript';
    skillForm: FormGroup | any;
    fb: FormBuilder;

    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
        this.fb = builder;
        this.createForm();
    }
    createForm() {
        this.skillForm = this.fb.group({
            skillname: ['', Validators.required],
            sname: ['', Validators.required],
            smail: ['', Validators.required]
        });
    }
}
