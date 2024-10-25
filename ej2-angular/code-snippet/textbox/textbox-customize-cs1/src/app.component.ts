import { Component } from '@angular/core';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        TextBoxModule
    ],
standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
                <label> Normal Input </label>
                    <ejs-textbox placeholder="First Name"> </ejs-textbox>
                 <label> Floating Input </label>
                 <ejs-textbox placeholder="Last Name" floatLabelType="Auto"> </ejs-textbox>
              </div>`
})

export class AppComponent {
}