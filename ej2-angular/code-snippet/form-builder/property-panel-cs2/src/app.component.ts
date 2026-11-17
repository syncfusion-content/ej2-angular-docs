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
    const labelProp = this.formObj?.getProperty(FormWidgetType.Textarea, "label");
    if (labelProp) {
      labelProp.visible = false;
    }
    this.formObj?.refresh();
  }
}