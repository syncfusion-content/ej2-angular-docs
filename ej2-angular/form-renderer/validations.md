---
layout: post
title: Validations in Angular Form Renderer Component | Syncfusion
description: Learn here all about built-in and custom validation rules in the Syncfusion Angular Form Renderer component of Syncfusion Essential JS 2 and more.
control: Validations
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Validations in Angular Form Renderer component

Validations make sure a form only accepts values that satisfy the rules declared in the schema. The Form Renderer runs validations declaratively — every rule lives next to the field it constrains, so the form's behavior is fully described by the JSON schema and no hand-written validators are needed.

Validation runs in two situations:

* **On submit** — when the user clicks a `buttonType: "submit"` button. The renderer checks every visible, enabled field. If any rule fails, the `submit` event will be raised with `isValid` argument with `false` as value and the failing field shows an error message.
* **On change** — for the most common rules, the renderer re-runs the validation as soon as the field's value changes, so the user sees errors clear in real time instead of waiting for submit.

Validations come in two flavors:

* **[Built-in rules](#built-in-validation-rules)** — common checks declared with a single property on the field (`required`, `minLength`, `pattern`, and so on).
* **[Custom Validation](#custom-validation)** — open-ended rules expressed as an expression. Use them when the built-in set is not enough.

## Built-in validation rules

Built-in rules are declared as properties on the field. Set them directly inside the field's `properties` entry. Each rule contributes a single error message that is shown beneath the field when it fails.

| Property | Type | Description | Supported widgets |
| --- | --- | --- | --- |
| `required` | `boolean` | Marks the field as mandatory. Empty input blocks form submission. | Textbox, Text Area, Numeric Textbox, Masked Input, Radio Button, Checkbox Group, Dropdown List, MultiSelect, Date Picker, DateTime Picker, Time Picker, Date Range Picker |
| `minLength` | `number` | Minimum number of characters required in the input. | Textbox, Text Area |
| `maxLength` | `number` | Maximum number of characters allowed in the input. | Textbox, Text Area |
| `pattern` | `string` | A regular expression that the input value must match. The pattern uses JavaScript regex syntax without flags. | Textbox, Text Area |

The example below applies several built-in rules to a single registration form:

```json
{
  "properties": {
    "emailAddress": {
      "id": "textbox_1785491685456_167",
      "name": "emailAddress",
      "type": "string",
      "label": "Email Address",
      "textboxType": "email",
      "required": true,
      "email": true,
      "maxLength": 254,
      "widget": "textbox"
    },
    "password": {
      "id": "textbox_1785491685456_537",
      "name": "password",
      "type": "string",
      "label": "Password",
      "textboxType": "password",
      "required": true,
      "minLength": 8,
      "maxLength": 32,
      "widget": "textbox"
    },
    "age": {
      "id": "number_1785491685456_711",
      "name": "age",
      "type": "number",
      "label": "Age",
      "required": true,
      "min": 18,
      "max": 120,
      "widget": "number"
    },
    "website": {
      "id": "textbox_1785491685456_812",
      "name": "website",
      "type": "string",
      "label": "Website",
      "textboxType": "url",
      "url": true,
      "widget": "textbox"
    }
  }
}
```

In this example, `emailAddress` is required, must be a valid email; `password` is required; `age` is required and must be within 18 to 120; and `website` must be a URL whose value starts with `https://`.

## Custom validation

When the built-in set is not enough, add a `customValidation` array on the field. Each entry is a rule: an expression that must assign a result to the variable `valid` — `true` for a pass, a string for a fail (the string is shown as the error message beneath the field).

The `input` variable holds the current value of the field being validated. Any other field on the form can be referenced by enclosing its name in curly braces (`{name}`) — the renderer resolves these references against the current form state before the expression runs.

```json
{
  "properties": {
    "confirmPassword": {
      "id": "textbox_1785955762897_599",
      "name": "confirmPassword",
      "type": "string",
      "label": "Confirm Password",
      "textboxType": "password",
      "widget": "textbox",
      "customValidation": [
        {
          "expression": "valid = (input === {password}) ? true : 'Confirm password should match password'"
        }
      ]
    }
  }
}
```

In this example, the `confirmPassword` field is only valid when its value equals the value of the `password` field. While it does not, the form displays the message "Confirm password should match password" beneath the field.

## `customValidation` structure

`customValidation` is an **array** of rule objects on the field. Multiple rules are evaluated independently — the field is valid only if every rule passes. Each rule is an object with a single `expression` property:

| Property | Type | Description |
| --- | --- | --- |
| `expression` | `string` | An expression that assigns to the variable `valid`. Use `true` to pass, or a string to fail with that string as the error message. |

A rule can read:

* `input` — the current value of the field being validated.
* `{name}` — the current value of any other field on the form, by `name`.
* All [expression operators and functions](./expressions) (arithmetic, comparison, logical, string, math, date, aggregate) plus the `Math` object.

```json
{
  "properties": {
    "age": {
      "id": "number_1785491685456_711",
      "name": "age",
      "type": "number",
      "label": "Age",
      "required": true,
      "min": 0,
      "max": 120,
      "widget": "number",
      "customValidation": [
        {
          "expression": "valid = (input >= 18) ? true : 'You must be at least 18 years old'"
        }
      ]
    }
  }
}
```

In this example, `age` is rejected with a custom message if it is below 18. The built-in `min: 0` and `max: 120` rules still apply on top — both layers must pass.

## Built-in vs. custom — when to use which

| Use a built-in rule when… | Use a custom rule when… |
| --- | --- |
| The validation check maps to a single declared property (`required`, `minLength`, `pattern`). | The validation check depends on the value of another field (for example, a date range that follows another field, or a confirm-password match). |
| The error message can be left as the default. | The error message must be specific to the form's wording. |
| The rule applies uniformly to every form. | The rule is form-specific or domain-specific. |

The two layers compose: a field can carry any combination of built-in rules and `customValidation` entries, and every layer must pass before the form is allowed to submit.
