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
                <label> Normal Input </label>
                    <ejs-textbox 
                    placeholder = "Enter numeric values" (keyup)="onKeyup($event)"></ejs-textbox>
                 <label> Floating Input </label>
                 <ejs-textbox 
                    placeholder = "Enter numeric values" floatLabelType="Auto" (keyup)="onKeyup($event)"></ejs-textbox>
              </div>`
})

export class AppComponent {
    public onKeyup(event: any): void {
        let str = event.target.value.match(/^[0-9]+$/);
        if (!((str && str.length > 0)) && event.target.value.length) {
        event.target.parentElement.classList.add('e-error');
        } else {
        event.target.parentElement.classList.remove('e-error');
        }
  }
}