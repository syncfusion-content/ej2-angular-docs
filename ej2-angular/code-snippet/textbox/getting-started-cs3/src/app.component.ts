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
    template: `<ejs-textbox placeholder="Address" multiline=true></ejs-textbox>`
})

export class AppComponent { }


