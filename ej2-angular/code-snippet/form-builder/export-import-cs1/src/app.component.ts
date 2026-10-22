import { Component, ViewChild } from '@angular/core';
import { FormBuilderComponent, FormBuilderModule } from '@syncfusion/ej2-angular-form-builder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormBuilderModule],
  template: `
  <ejs-form-builder #formObj [allowExport]="false" ></ejs-form-builder>
  `
})
export class AppComponent {
  @ViewChild('formObj') public formObj?: FormBuilderComponent;
}