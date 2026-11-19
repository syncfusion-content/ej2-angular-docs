---
layout: post
title: Form Actions in Angular Form Renderer Component | Syncfusion
description: Learn all about the form actions such as submit, change, reset, and others in the Syncfusion Angular Form Renderer component of Syncfusion Essential JS 2 and more.
control: Form Actions
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Form Actions in Angular Form Renderer component

This section explains the form actions that can be performed in the Form Renderer control.

Forms typically include buttons to perform common actions. A submit button submits the form, a reset button restores the form to its initial state, and a plain button can be used to execute custom logic. This page explains how to define each button as a field in `properties` and describes the events raised when users click them.

A button is a regular field in `properties` with `type: "button"`. The kind of button is decided by `buttonType`:

| `buttonType` | What it does | Event raised |
| --- | --- | --- |
| `"submit"` | Validates the form. Raises `submit` if validation passes. | `submit` |
| `"reset"` | Resets every field.| — (native form reset, no event) |
| `"button"` | Plain click button. | `buttonClick` |

## Submitting the form

The form created with the Form Renderer control can be submitted when a submit button is defined in the form schema. To enable form submission, declare a button field in `properties` with `buttonType: "submit"` and include it in the `layout` array.

```json
{
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
}
```

When the user clicks the submit button, the renderer validates the form. If validation passes, the `submit` event fires with the current form data and an `isValid` flag.

| Member | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, FieldDataType>` | The current value of every visible, non-disabled field keyed by the field's `name`. Layout-only fields (`button`, `message`, `panel`, `table`, `tabs`, `card`) are excluded. |
| `isValid` | `boolean` | `true` if every required field is filled and every validation rule passes at submit time. |

> The submission `data` object is keyed by the field's **name**, which is the same key you declared in `properties`. This keeps the payload stable when the schema is reorganized in the form builder.

The following example renders a Form Renderer with email, password, and remember-me fields, along with a submit button. When the user clicks **Submit**, the `submit` event is raised with the form data and the validation status:

```ts
import { FormRenderer } from '@syncfusion/ej2-formrenderer';

// initialize Form Renderer control
let formRenderer: FormRenderer = new FormRenderer({
    schema: {
        "version": "0.1.0",
        "properties": {
            "emailAddress": {
                "id": "textbox_1785491685456_167",
                "name": "emailAddress",
                "type": "string",
                "label": "Email Address",
                "textboxType": "email",
                "required": true,
                "widget": "textbox"
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "required": true,
                "minLength": 6,
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
            { "type": "field", "propertyId": "emailAddress" },
            { "type": "field", "propertyId": "password" },
            { "type": "field", "propertyId": "rememberMe" },
            { "type": "field", "propertyId": "submit" }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    },
    submit: onSubmit
});

// Render initialized Form Renderer.
formRenderer.appendTo('#formrenderer');

function onSubmit(args: any): void {
    console.log(args);
}
```

## Resetting the form

A reset button restores the form to its initial state. To enable form reset, declare a button field in `properties` with `buttonType: "reset"` and include it in the `layout` array.

```json
{
  "reset": {
    "id": "reset_button_initial",
    "name": "defaultFormreset",
    "type": "button",
    "label": "Reset",
    "buttonType": "reset",
    "widget": "button",
    "style": "primary",
    "disabled": false
  }
}
```

The `reset` button does not raise an event. Clicking it triggers the browser's native form-reset behavior, which restores every field to its initial value.

The following example renders a Form Renderer with email, password, and remember-me fields, along with a reset button. When the user clicks **Reset**, every field is restored to its initial state:

```ts
import { FormRenderer } from '@syncfusion/ej2-formrenderer';

// initialize Form Renderer control
let formRenderer: FormRenderer = new FormRenderer({
    schema: {
        "version": "0.1.0",
        "properties": {
            "emailAddress": {
                "id": "textbox_1785491685456_167",
                "name": "emailAddress",
                "type": "string",
                "label": "Email Address",
                "textboxType": "email",
                "required": true,
                "widget": "textbox"
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "required": true,
                "minLength": 6,
                "widget": "textbox"
            },
            "rememberMe": {
                "id": "checkbox_1785491685456_262",
                "name": "rememberMe",
                "type": "boolean",
                "label": "Remember Me",
                "widget": "checkbox"
            },
            "reset": {
                "id": "reset_button_initial",
                "name": "defaultFormreset",
                "type": "button",
                "label": "Reset",
                "buttonType": "reset",
                "widget": "button",
                "style": "primary",
                "disabled": false
            }
        },
        "layout": [
            { "type": "field", "propertyId": "emailAddress" },
            { "type": "field", "propertyId": "password" },
            { "type": "field", "propertyId": "rememberMe" },
            { "type": "field", "propertyId": "reset" }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    }
});

// Render initialized Form Renderer.
formRenderer.appendTo('#formrenderer');
```


## Adding custom click actions

A plain click button is a field in `properties` with `buttonType: "button"`. Use it for any custom logic that should run when the button is clicked.

```json
{
  "cancel": {
    "id": "cancel_button_initial",
    "name": "defaultFormcancel",
    "type": "button",
    "label": "Cancel",
    "buttonType": "button",
    "widget": "button",
    "style": "primary",
    "disabled": false
  }
}
```

When the user clicks a `buttonType: "button"` button, the renderer raises the `buttonClick` event.

| Member | Type | Description |
| --- | --- | --- |
| `fieldName` | `string` | The unique name / identifier of the clicked button. |
| `label` | `string` | The display text / label of the clicked button. |
| `event` | `any` | The original button click event. |

The following example renders a Form Renderer with email, password, and remember-me fields, along with a custom click button. When the user clicks **Cancel**, the `buttonClick` event is raised with the button's name, label, and the original click event:

```ts
import { FormRenderer } from '@syncfusion/ej2-formrenderer';

// initialize Form Renderer control
let formRenderer: FormRenderer = new FormRenderer({
    schema: {
        "version": "0.1.0",
        "properties": {
            "emailAddress": {
                "id": "textbox_1785491685456_167",
                "name": "emailAddress",
                "type": "string",
                "label": "Email Address",
                "textboxType": "email",
                "required": true,
                "widget": "textbox"
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "required": true,
                "minLength": 6,
                "widget": "textbox"
            },
            "rememberMe": {
                "id": "checkbox_1785491685456_262",
                "name": "rememberMe",
                "type": "boolean",
                "label": "Remember Me",
                "widget": "checkbox"
            },
            "cancel": {
                "id": "cancel_button_initial",
                "name": "defaultFormcancel",
                "type": "button",
                "label": "Cancel",
                "buttonType": "button",
                "widget": "button",
                "style": "primary",
                "disabled": false
            }
        },
        "layout": [
            { "type": "field", "propertyId": "emailAddress" },
            { "type": "field", "propertyId": "password" },
            { "type": "field", "propertyId": "rememberMe" },
            { "type": "field", "propertyId": "cancel" }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    },
    buttonClick: onButtonClick
});

// Render initialized Form Renderer.
formRenderer.appendTo('#formrenderer');

function onButtonClick(args: any): void {
    console.log(args);
}
```

## Detecting the field change

When the value of any field changes, the renderer raises the `change` event. Typing into the `email` or `password` field, picking a date, toggling a switch, picking a value from a dropdown, and program-driven changes from expression evaluation all raise it.

| Member | Type | Description |
| --- | --- | --- |
| `fieldName` | `string` | The unique name / identifier of the changed field. |
| `label` | `string` | The display text / label of the form field. |
| `value` | `FieldDataType` | The new value of the field. The type matches the field's `type`: `string` for text-like widgets, `number` for numeric widgets, `boolean` for checkbox / switch, and `any[]` for `multiselect` / `checkboxGroup`. |

`change` is **not** fired for layout-only nodes (`panel`, `table`, `tabs`, `card`) or for presentation-only widgets like `staticHtml` and `message`. Buttons do not raise `change` — clicking them raises `submit`, `buttonClick`, or nothing (for reset).

When the value of a field changes, the renderer:

1. Updates the value of that field in the form state.
2. Re-evaluates every `expressionValue` that references that field.
3. Re-runs any `customValidation` rules that depend on the field.
4. Emits the `change` event with `{ fieldName, label, value }`.

The following example renders a Form Renderer with textbox and checkbox fields. Whenever the value of any field changes, the `change` event is raised with the changed field's name, label, and new value:

```ts
import { FormRenderer } from '@syncfusion/ej2-formrenderer';

// initialize Form Renderer control
let formRenderer: FormRenderer = new FormRenderer({
    schema: {
        "version": "0.1.0",
        "properties": {
            "emailAddress": {
                "id": "textbox_1785491685456_167",
                "name": "emailAddress",
                "type": "string",
                "label": "Email Address",
                "textboxType": "email",
                "required": true,
                "widget": "textbox"
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "required": true,
                "minLength": 6,
                "widget": "textbox"
            },
            "rememberMe": {
                "id": "checkbox_1785491685456_262",
                "name": "rememberMe",
                "type": "boolean",
                "label": "Remember Me",
                "widget": "checkbox"
            }
        },
        "layout": [
            { "type": "field", "propertyId": "emailAddress" },
            { "type": "field", "propertyId": "password" },
            { "type": "field", "propertyId": "rememberMe" }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    },
    change: onChange
});

// Render initialized Form Renderer.
formRenderer.appendTo('#formrenderer');

function onChange(args: any): void {
    console.log(args);
}
```

## Customizing the form once the control is rendered

The `created` event fires **once**, after the form has finished rendering and every input is in the DOM. Use it for any setup that needs the renderer to be ready — for example, calling `getComponent` to obtain an input instance, attaching a third-party mask, or wiring up toolbar buttons that operate on the form.

The following example renders a Form Renderer with email, password, and remember-me fields. Once the form has finished rendering, the `created` event is raised with an empty payload:


```ts
import { FormRenderer } from '@syncfusion/ej2-formrenderer';

// initialize Form Renderer control
let formRenderer: FormRenderer = new FormRenderer({
    schema: {
        "version": "0.1.0",
        "properties": {
            "emailAddress": {
                "id": "textbox_1785491685456_167",
                "name": "emailAddress",
                "type": "string",
                "label": "Email Address",
                "textboxType": "email",
                "required": true,
                "widget": "textbox"
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "required": true,
                "minLength": 6,
                "widget": "textbox"
            },
            "rememberMe": {
                "id": "checkbox_1785491685456_262",
                "name": "rememberMe",
                "type": "boolean",
                "label": "Remember Me",
                "widget": "checkbox"
            }
        },
        "layout": [
            { "type": "field", "propertyId": "emailAddress" },
            { "type": "field", "propertyId": "password" },
            { "type": "field", "propertyId": "rememberMe" }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    },
    created: onCreated
});

// Render initialized Form Renderer.
formRenderer.appendTo('#formrenderer');

function onCreated(): void {
    console.log("Form is created");
}
```


## See also

* [Getting Started with JavaScript (ES5)](./es5-getting-started)
