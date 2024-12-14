import { Component } from '@angular/core';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { BeforeChangeEventArgs } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-root',
  template: `
    <div class="e-section-control">
      <!-- Render Switch with checked state and beforeChange event -->
      <ejs-switch [checked]="true" (beforeChange)="beforeChange($event)"></ejs-switch>
    </div>
  `,
  standalone: true,
  imports: [SwitchModule],
})
export class AppComponent {
  beforeChange(args: BeforeChangeEventArgs): void {
    // Set cancel to true to prevent the switch state change
    args.cancel = true;
  }
}