import { FormsModule } from '@angular/forms'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { Component } from '@angular/core';

@Component({
    imports: [
        TextBoxModule,
        FormsModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
         <ejs-textbox placeholder = "Input with warning" cssClass="e-warning"></ejs-textbox>
         <ejs-textbox placeholder = "Input with error" cssClass="e-error"></ejs-textbox>
         <ejs-textbox placeholder = "Input with success" cssClass="e-success"></ejs-textbox>
    </div>`
})

export class AppComponent {
}


