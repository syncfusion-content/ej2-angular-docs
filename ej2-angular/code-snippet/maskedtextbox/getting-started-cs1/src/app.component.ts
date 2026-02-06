import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    imports: [MaskedTextBoxModule, FormsModule],
    standalone: true,
    selector: 'app-root',
    // sets mask format to the MaskedTextBox
    template: `<label class='label'>Enter the mobile number</label>` +
        `<ejs-maskedtextbox mask='000-000-0000'></ejs-maskedtextbox>`
})
export class AppComponent {
    constructor() { }
}
