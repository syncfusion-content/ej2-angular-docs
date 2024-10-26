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
                <h4> Bigger Size </h4>
                <ejs-textbox placeholder = "Enter Name" floatLabelType="Auto" cssClass="e-bigger"></ejs-textbox>
                <h4> Small Size </h4>
                <ejs-textbox placeholder = "Enter Name" floatLabelType="Auto" cssClass="e-small"></ejs-textbox>
              </div>`
})

export class AppComponent {
  
}


