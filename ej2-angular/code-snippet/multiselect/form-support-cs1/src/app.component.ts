
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core';

@Component({
    imports: [
        FormsModule, ReactiveFormsModule, MultiSelectModule, ButtonModule, CommonModule
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

    constructor() {
    }
    skillForm = {
        skillname: null,
        sname: '',
        smail: ''
    };
}