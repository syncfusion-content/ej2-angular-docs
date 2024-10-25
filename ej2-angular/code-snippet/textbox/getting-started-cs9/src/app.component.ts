import { Component } from '@angular/core';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        TextBoxModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
                <ejs-textbox placeholder="Enter Name" value="John" [readonly]="true"> </ejs-textbox>
                <ejs-textbox placeholder="Enter Name" floatLabelType="Auto" [readonly]="true"></ejs-textbox>
              </div>`
})

export class AppComponent {
}