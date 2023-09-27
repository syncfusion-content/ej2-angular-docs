import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-field-error-display',
  styleUrls: ['field-error-display.component.css'],
  encapsulation: ViewEncapsulation.None,
  template: `<div *ngIf="displayError" >
                <div class="e-error">
                  {{ errorMsg }}
                </div>
              </div>`
})
export class FieldErrorDisplayComponent {

  @Input() errorMsg?: string;
  @Input() displayError?: boolean;

}
