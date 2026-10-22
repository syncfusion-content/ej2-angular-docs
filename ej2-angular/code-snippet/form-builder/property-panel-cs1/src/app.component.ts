import { Component, ViewChild } from '@angular/core';
import { FormBuilderComponent, FormBuilderModule, FormWidgetType } from '@syncfusion/ej2-angular-form-builder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormBuilderModule],
  template: `
  <ejs-form-builder #formObj></ejs-form-builder>
  `
})
export class AppComponent {
  @ViewChild('formObj') public formObj?: FormBuilderComponent;

  ngAfterViewInit() {
    
    // Set property for Textarea widget
    this.formObj?.setProperty(FormWidgetType.Textarea, {
      key: 'enableRtl',
      label: 'Enable RTL',
      type: 'boolean',
      default: false
    });
  }
}