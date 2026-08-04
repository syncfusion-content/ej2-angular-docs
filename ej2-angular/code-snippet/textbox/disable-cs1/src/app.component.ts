import { FormsModule } from '@angular/forms';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         FormsModule, TextBoxModule
    ],


standalone: true,
    selector: 'app-container',
    styleUrls: ['./index.css'],
    encapsulation:ViewEncapsulation.None,
    template: `<div class="multiline">
                <ejs-textbox id='default' [multiline]='true' floatLabelType='Auto' placeholder='Enter your address' ></ejs-textbox>
               </div>
              `
})
export class AppComponent {
}