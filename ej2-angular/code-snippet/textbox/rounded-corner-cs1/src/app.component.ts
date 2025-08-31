import { Component } from '@angular/core';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        TextBoxModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
                 <ejs-textbox placeholder="Enter Date" cssClass="e-outline e-corner"></ejs-textbox>
              </div>`
})

export class AppComponent {
}



