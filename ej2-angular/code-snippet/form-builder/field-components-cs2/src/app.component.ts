import { Component, ViewChild } from '@angular/core';
import {
  ComponentCategory,
  FormBuilderComponent,
  FormBuilderModule,
  FormWidgetType
} from '@syncfusion/ej2-angular-form-builder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormBuilderModule],
  template: `
    <ejs-form-builder
      #formObj
      [toolboxCategories]="toolboxCategories">
    </ejs-form-builder>
  `
})
export class AppComponent {
  @ViewChild('formObj')
  public formObj?: FormBuilderComponent;

  public toolboxCategories = [
    {
      category: ComponentCategory.Basic,
      items: [
        FormWidgetType.Textbox,
        FormWidgetType.Textarea
      ]
    },
    {
      category: ComponentCategory.Advanced,
      items: [
        FormWidgetType.Date,
        FormWidgetType.DateRange
      ]
    },
    {
      category: ComponentCategory.Layout,
      items: [
        FormWidgetType.Panel,
        FormWidgetType.Card
      ]
    }
  ];
}