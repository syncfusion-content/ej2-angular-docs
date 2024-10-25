import { FormsModule } from '@angular/forms'
import { Component } from '@angular/core';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        TextBoxModule,
        FormsModule 
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
                <ejs-textbox placeholder="Success" floatLabelType="Auto" cssClass="e-success"></ejs-textbox>
                <ejs-textbox placeholder="Warning" floatLabelType="Auto" cssClass="e-warning"></ejs-textbox>>
              </div>`
})

export class AppComponent {

}