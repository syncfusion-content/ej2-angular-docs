---
layout: post
title: Preview Tab in Angular Form Builder component | Syncfusion
description: Learn how to use the Preview Tab in the Angular Form Builder component to view the generated form and review the JSON schema.
platform: ej2-angular
control: Preview Tab
documentation: ug
domainurl: ##DomainURL##
---

# Preview Tab in Angular Form Builder component

The Form Builder provides a preview tab that lets you view the generated form as it will appear to end users. It also includes a JSON code preview to review the form schema created by the builder.

## Preview the form

You can switch to the **Preview** tab to see a live preview of the form. This view reflects the current form configuration and helps you validate the layout, labels, and field behavior before exporting or publishing the form.

![Preview in Form Builder](./images/form-builder-preview.gif)

## Disabling the preview

The preview option can be disabling by setting the `enablePreview` property to `false`. The default value is `true`.

```ts
import { Component, ViewChild } from '@angular/core';
import { FormBuilderComponent, FormBuilderModule } from '@syncfusion/ej2-angular-form-builder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormBuilderModule],
  template: `
  <ejs-form-builder #formObj [enablePreview]="false"></ejs-form-builder>
  `
})
export class App {
  @ViewChild('formObj') public formObj?: FormBuilderComponent;
}
```

The output will appear as follows:

![Disabling the preview in Form Builder](./images/form-builder-disable-preview.png)

## JSON code preview

You can switch to the **JSON** tab to view the form schema as a JSON object. This code preview is useful for reviewing the generated schema and understanding the structure used by the Form Builder.

The **Copy** button in the JSON code preview copies the created form schema JSON object to the clipboard so that you can reuse it in another application or pass it to the Form Renderer control.

![Code Preview in Form Builder](./images/form-builder-code-preview.gif)

## Build and preview workflow

Use the **Build** tab to create or edit the form, then switch to **Preview** to validate the rendered form. If you need the schema representation, open **JSON** and use **Copy** to copy the generated form schema.
