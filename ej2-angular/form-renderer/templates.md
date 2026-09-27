---
layout: post
title: Templates in Angular Form Renderer component | Syncfusion
description: Learn how to use templates in the Angular Form Renderer component to display and integrate third-party components within forms.
platform: ej2-angular
control: Templates
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Form Renderer component

Templates can be displayed in the Form Renderer control to render third-party components within a form.

This section explains how to use templates in the Form Renderer component.

## Adding Templates

Templates can be added to a form in Form Renderer using `<e-customwidgetsetting>`.
Use the `<e-customwidgetsetting>` directive inside `<e-customwidgetsettings>` to define custom templates. Set the `type` property to target all form fields of a specific widget type, and define the custom UI using `<ng-template #template>`.

Multiple `<e-customwidgetsetting>` entries can be added inside `<e-customwidgetsettings>` to register templates for different widget types.

```ts
import { Component, signal, ViewChild } from '@angular/core';
import { FormRendererModule, FormRendererComponent, Schema, CustomWidgetSettingsDirective, CustomWidgetSettingDirective, CustomWidgetSettingModel } from '@syncfusion/ej2-angular-form-renderer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormRendererModule, CustomWidgetSettingDirective, CustomWidgetSettingsDirective],
  template: `
  <ejs-form-renderer #formObj [schema]="schema"  (submit)="onSubmit($event)">
    <e-customwidgetsettings>
      <e-customwidgetsetting type="textbox">
        <ng-template #template let-data>     
          <input
            [type]="data.fieldData?.textboxType || data.textboxType"
            [id]="data.fieldData?.id || data.id"
            [name]="data.fieldData?.name || data.name"
            [placeholder]="data.fieldData?.placeholder"
            class="custom-input"
            [value]="data.value || ''"
            (input)="onInputChange($event, data, formObj)"
          />
        </ng-template>
      </e-customwidgetsetting>
    </e-customwidgetsettings>
</ejs-form-renderer>`
})
export class App {
    @ViewChild('formObj') public formObj?: FormRendererComponent;
    protected readonly title = signal('syncfusion-angular-app');
    public schema: Schema = {
        "version": "0.1.0",
        "properties": {
        "emailAddress": {
            "id": "textbox_1785491685456_167",
            "name": "emailAddress",
            "type": "string",
            "label": "Email Address",
            "textboxType": "email",
            "required": true,
            "placeholder": "Enter your email",
            "widget": "textbox",
        },
        "password": {
            "id": "textbox_1785491685456_537",
            "name": "password",
            "type": "string",
            "label": "Password",
            "textboxType": "password",
            "required": true,
            "minLength": 6,
            "placeholder": "Enter your password",
            "widget": "textbox"
        },
        "rememberMe": {
            "id": "checkbox_1785491685456_262",
            "name": "rememberMe",
            "type": "boolean",
            "label": "Remember Me",
            "widget": "checkbox"
        },
        "submit": {
            "id": "submit_button_initial",
            "name": "defaultFormsubmit",
            "type": "button",
            "label": "Submit",
            "buttonType": "submit",
            "widget": "button",
            "style": "primary",
            "disabled": false
        }
        },
        "layout": [
        {
            "type": "field",
            "propertyId": "emailAddress"
        },
        {
            "type": "field",
            "propertyId": "password"
        },
        {
            "type": "field",
            "propertyId": "rememberMe"
        },
        {
            "type": "field",
            "propertyId": "submit"
        }
        ],
        "settings": {
        "name": "Untitled Form"
        }
    };

    // Handler for custom input change in Angular template
    public onInputChange(event: Event, data: any, formObj: FormRendererComponent) {
        const value = (event.target as HTMLInputElement).value;
        if (this.formObj) {
            this.formObj!.setFieldValue(data.fieldData.id, value);
        }
    }
    public onSubmit(args: any) {
        if (args.data) {
            console.log(args.data, args.isValid);
        }
    }
}

```

## Adding a template to a single or specific field

To apply a template to a specific field rather than an entire widget type, use `fieldName` or `templateId` on `<e-customwidgetsetting>` instead of `type`:

* **`fieldName`** - Matches the `name` value of the target field in the schema.
* **`templateId`** - Matches a `templateId` property defined on the field in the schema.

```ts
import { Component, signal, ViewChild } from '@angular/core';
import { FormRendererModule, FormRendererComponent, Schema, CustomWidgetSettingsDirective, CustomWidgetSettingDirective, CustomWidgetSettingModel } from '@syncfusion/ej2-angular-form-renderer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormRendererModule, CustomWidgetSettingDirective, CustomWidgetSettingsDirective],
  template: `
  <ejs-form-renderer #formObj [schema]="schema"  (submit)="onSubmit($event)">
    <e-customwidgetsettings>
      <e-customwidgetsetting fieldName="emailAddress">
        <!-- If prefer adding templates using 'templateId' use
        <e-customwidgetsetting fieldName="emailAddress"> -->
        <ng-template #template let-data>     
          <input
            [type]="data.fieldData?.textboxType || data.textboxType"
            [id]="data.fieldData?.id || data.id"
            [name]="data.fieldData?.name || data.name"
            [placeholder]="data.fieldData?.placeholder"
            class="custom-input"
            [value]="data.value || ''"
            (input)="onInputChange($event, data, formObj)"
          />
        </ng-template>
      </e-customwidgetsetting>
    </e-customwidgetsettings>
</ejs-form-renderer>`
})
export class App {
    @ViewChild('formObj') public formObj?: FormRendererComponent;
    protected readonly title = signal('syncfusion-angular-app');
    public schema: Schema = {
        "version": "0.1.0",
        "properties": {
        "emailAddress": {
            "id": "textbox_1785491685456_167",
            "name": "emailAddress",
            "type": "string",
            "label": "Email Address",
            "textboxType": "email",
            "required": true,
            "placeholder": "Enter your email",
            "widget": "textbox",
        },
        "password": {
            "id": "textbox_1785491685456_537",
            "name": "password",
            "type": "string",
            "label": "Password",
            "textboxType": "password",
            "required": true,
            "minLength": 6,
            "placeholder": "Enter your password",
            "widget": "textbox"
        },
        "rememberMe": {
            "id": "checkbox_1785491685456_262",
            "name": "rememberMe",
            "type": "boolean",
            "label": "Remember Me",
            "widget": "checkbox"
        },
        "submit": {
            "id": "submit_button_initial",
            "name": "defaultFormsubmit",
            "type": "button",
            "label": "Submit",
            "buttonType": "submit",
            "widget": "button",
            "style": "primary",
            "disabled": false
        }
        },
        "layout": [
        {
            "type": "field",
            "propertyId": "emailAddress"
        },
        {
            "type": "field",
            "propertyId": "password"
        },
        {
            "type": "field",
            "propertyId": "rememberMe"
        },
        {
            "type": "field",
            "propertyId": "submit"
        }
        ],
        "settings": {
        "name": "Untitled Form"
        }
    };
    public onSubmit(args: any) {
        if (args.data) {
        console.log(args.data, args.isValid);
        }
    }
    // Handler for custom input change in Angular template
    public onInputChange(event: Event, data: any, formObj: FormRendererComponent) {
        const value = (event.target as HTMLInputElement).value;
        if (this.formObj) {
        this.formObj!.setFieldValue(data.fieldData.id, value);
        }
    }
}
```
