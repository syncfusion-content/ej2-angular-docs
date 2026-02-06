import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule, MaskedTextBoxModule],
  template: `
    <h3>Two-way binding (ngModel)</h3>

    <div class="e-input-group" style="margin-bottom: 16px;">
      <input class="e-input" type="text"
             placeholder="Mobile Number"
             [(ngModel)]="value" />
    </div>

    <ejs-maskedtextbox
      mask="000-000-0000"
      placeholder="000-000-0000"
      [(ngModel)]="value">
    </ejs-maskedtextbox>
  `
})
export class App {
  public value: string = '';
}
