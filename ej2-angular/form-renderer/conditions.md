---
layout: post
title: Conditional Rules in Angular Form Renderer component | Syncfusion
description: Learn how conditional rules in the Angular Form Renderer control field visibility, requirement, read-only, disable, and value-set behavior based on user input.
control: Conditional Rules
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Conditional Rules in Angular Form Renderer component

Conditional rules let a form change its behavior in response to what the user enters. A field can be shown, hidden, required, read-only, disabled, or auto-populated based on the value of another field. This avoids hand-wiring change handlers and keeps the form logic declarative, side by side with the rest of the schema.

The Form Renderer supports the following conditional rule types, each added under a field's `conditions` object:

* [Conditional Visibility (`visibleWhen`)](#conditional-visibility)
* [Conditional Hide (`hideWhen`)](#conditional-hide)
* [Conditional Required (`requiredWhen`)](#conditional-required)
* [Conditional Read-Only (`readOnlyWhen`)](#conditional-read-only)
* [Conditional Disable (`disabledWhen`)](#conditional-disable)
* [Set Value When (`setValueWhen`)](#set-value-when)
* [Choice-Based Field (`choiceBasedField`)](#choice-based-field)

## Rule structure

Every conditional rule is an object placed under one of the keys listed above inside a field's `conditions`. A rule contains a `condition` and, depending on the rule type, a `value` to assign or other configuration.

### The `condition` property

The `condition` property describes the boolean expression that decides whether the rule fires. It can be a single rule (a flat object) or a nested group with a logical operator.

| Property | Type | Description |
| --- | --- | --- |
| `condition` | `'and' \| 'or'` | Logical operator that combines the entries in `rules`. Use `and` when every rule must match, `or` when at least one rule must match. This property is mandator when group of conditions are provided. |
| `rules` | `ConditionRule[]` | The list of leaf conditions or nested groups that are combined by `condition`. |

A leaf condition (a single rule inside `rules`) has the following shape:

| Property | Type | Description |
| --- | --- | --- |
| `label` | `string` | Display name of the source field. Used to show the rule in the form builder and error messages. |
| `field` | `string` | The `id` of the source field whose value is being checked. |
| `operator` | `string` | The comparison to apply. See [The `operator` property](#the-operator-property) for the full list. |
| `type` | `'string' \| 'number' \| 'date' \| 'boolean'` | Data type of the source field's value. Drives how the comparison is performed. |
| `value` | `string \| number \| boolean \| null` | The value to compare against. Set to `null` for operators that do not need a value, such as `isempty` and `isnotempty`. |

> Groups and leaves can be mixed: any entry inside `rules` can itself be a group with its own `condition` and `rules`. This lets you build expressions like `(A and B) or (C and not D)`.

### The `operator` property

The `operator` property selects the comparison to apply against the source field's value. The same operator works across all data types; for dates, the comparison is performed on the parsed `Date` value.

| Operator | Description | Value property required? | Data type |
| --- | --- | --- | --- |
| `isempty` | Source value is empty (no value entered). | No | All |
| `isnotempty` | Source value is not empty (any value entered). | No | All |
| `equal` | Source value equals the given value. | Yes | All |
| `notequal` | Source value does not equal the given value. | Yes | All |
| `contains` | Source value contains the given substring. | Yes | String |
| `notcontains` | Source value does not contain the given substring. | Yes | String |
| `startswith` | Source value starts with the given substring. | Yes | String |
| `doesnotstartswith` | Source value does not start with the given substring. | Yes | String |
| `greaterthan` | Source value is greater than the given value. | Yes | Number, Date |
| `lessthan` | Source value is less than the given value. | Yes | Number, Date |
| `greaterthanorequal` | Source value is greater than or equal to the given value. | Yes | Number, Date |
| `lessthanorequal` | Source value is less than or equal to the given value. | Yes | Number, Date |

## Conditional Visibility

`visibleWhen` shows a field only when the condition matches. If the condition does not match, the field is removed from the layout and its value is excluded from the submitted data. Use it for fields that should appear in response to user input — for example, a "Confirm Password" field that only matters once a password has been typed.

```json
{
  "properties": {
    "password": {
      "id": "textbox_1785954832282_65",
      "name": "password",
      "type": "string",
      "label": "Password",
      "textboxType": "password",
      "widget": "textbox"
    },
    "confirmPassword": {
      "id": "textbox_1785955762897_599",
      "name": "confirmPassword",
      "type": "string",
      "label": "Confirm Password",
      "textboxType": "password",
      "widget": "textbox",
      "conditions": {
        "visibleWhen": {
          "condition": "and",
          "rules": [
            {
              "label": "Password",
              "field": "textbox_1785954832282_65",
              "operator": "isnotempty",
              "type": "string",
              "value": null
            }
          ]
        }
      }
    }
  }
}
```

In this example, `confirmPassword` is rendered only once the user has typed something into `password`.

## Conditional Hide

`hideWhen` is the inverse of `visibleWhen`: the field is rendered by default and removed from the layout when the condition matches. Use it when a field is part of the form most of the time and should only disappear in a specific case.

```json
{
  "properties": {
    "password": {
      "id": "textbox_1785954832282_65",
      "name": "password",
      "type": "string",
      "label": "Password",
      "textboxType": "password",
      "widget": "textbox"
    },
    "confirmPassword": {
      "id": "textbox_1785955762897_599",
      "name": "confirmPassword",
      "type": "string",
      "label": "Confirm Password",
      "textboxType": "password",
      "widget": "textbox",
      "conditions": {
        "hideWhen": {
          "condition": "and",
          "rules": [
            {
              "label": "Password",
              "field": "textbox_1785954832282_65",
              "operator": "isempty",
              "type": "string",
              "value": null
            }
          ]
        }
      }
    }
  }
}
```

> `visibleWhen` and `hideWhen` produce the same end state — the field is shown only when the rule allows it. Pick the one that reads more naturally for the case you are modeling.

## Conditional Required

`requiredWhen` makes a field mandatory only when the condition matches. The field remains in the layout as usual; the rule only affects validation. If the field is empty **and** the condition matches, the renderer blocks form submission and surfaces a required-field error. As soon as the condition no longer matches, the field is no longer treated as required. Use it for fields that become important based on a user's choice.

```json
{
  "properties": {
    "firstName": {
      "id": "textbox_1785956338339_374",
      "name": "firstName",
      "type": "string",
      "label": "First Name",
      "textboxType": "text",
      "widget": "textbox",
      "labelPosition": "top"
    },
    "lastName": {
      "id": "textbox_1785956603404_711",
      "name": "lastName",
      "type": "string",
      "label": "Last Name",
      "textboxType": "text",
      "widget": "textbox",
      "conditions": {
        "requiredWhen": {
          "condition": "and",
          "rules": [
            {
              "label": "First Name",
              "field": "textbox_1785956338339_374",
              "operator": "startswith",
              "type": "string",
              "value": "A"
            }
          ]
        }
      }
    }
  }
}
```

In this example, `lastName` is required only when `firstName` starts with the letter `A`.

## Conditional Read-Only

`readOnlyWhen` lets a user see a field's value but prevents them from editing it. The field stays in the layout and its value is included in the submitted data; only input is blocked. Use it for fields that are auto-populated or that must be locked based on context.

```json
{
  "properties": {
    "firstName": {
      "id": "textbox_1785956338339_374",
      "name": "firstName",
      "type": "string",
      "label": "First Name",
      "textboxType": "text",
      "widget": "textbox",
      "labelPosition": "top"
    },
    "lastName": {
      "id": "textbox_1785956603404_711",
      "name": "lastName",
      "type": "string",
      "label": "Last Name",
      "textboxType": "text",
      "widget": "textbox",
      "conditions": {
        "readOnlyWhen": {
          "condition": "or",
          "rules": [
            {
              "label": "First Name",
              "field": "textbox_1785956338339_374",
              "operator": "contains",
              "type": "string",
              "value": "Guest"
            }
          ]
        }
      }
    }
  }
}
```

In this example, `lastName` becomes read-only whenever `firstName` contains the word `Guest`.

## Conditional Disable

`disabledWhen` renders the field in a non-interactive, dimmed state. Visually similar to read-only, the field is typically styled as inactive and is not part of tab order. Use it for fields that are temporarily out of scope.

```json
{
  "properties": {
    "firstName": {
      "id": "textbox_1785956338339_374",
      "name": "firstName",
      "type": "string",
      "label": "First Name",
      "textboxType": "text",
      "widget": "textbox",
      "labelPosition": "top"
    },
    "lastName": {
      "id": "textbox_1785956603404_711",
      "name": "lastName",
      "type": "string",
      "label": "Last Name",
      "textboxType": "text",
      "widget": "textbox",
      "conditions": {
        "disabledWhen": {
          "condition": "and",
          "rules": [
            {
              "label": "First Name",
              "field": "textbox_1785956338339_374",
              "operator": "notcontains",
              "type": "string",
              "value": "Guest"
            }
          ]
        }
      }
    }
  }
}
```

In this example, `lastName` is disabled whenever `firstName` does not contain the word `Guest`.

## Set Value When

`setValueWhen` assigns a fixed value to a field whenever the condition matches. This is useful for defaulting derived fields — for example, marking every non-`K` and non-`B` first name as `Guest`. The rule runs: the value is re-applied every time the source fields change, as long as the condition continues to match.

`setValueWhen` extends the base rule shape with a `value` field that holds the value to assign.

| Property | Description |
| --- | --- |
| `condition` | The boolean expression that decides when the value is applied. |
| `value` | The value assigned to the field when the condition matches. |

```json
{
  "properties": {
    "firstName": {
      "id": "textbox_1785956338339_374",
      "name": "firstName",
      "type": "string",
      "label": "First Name",
      "textboxType": "text",
      "widget": "textbox",
      "labelPosition": "top"
    },
    "lastName": {
      "id": "textbox_1785956603404_711",
      "name": "lastName",
      "type": "string",
      "label": "Last Name",
      "textboxType": "text",
      "widget": "textbox",
      "conditions": {
        "setValueWhen": {
          "condition": {
            "condition": "and",
            "rules": [
              {
                "label": "First Name",
                "field": "textbox_1785956338339_374",
                "operator": "doesnotstartswith",
                "type": "string",
                "value": "K"
              },
              {
                "condition": "and",
                "rules": [
                  {
                    "label": "First Name",
                    "field": "textbox_1785956338339_374",
                    "operator": "doesnotstartswith",
                    "type": "string",
                    "value": "B"
                  }
                ]
              }
            ]
          },
          "value": "Guest"
        }
      }
    }
  }
}
```

In this example, `lastName` is automatically set to `Guest` whenever `firstName` does not start with `K` **and** does not start with `B`.

## Choice-Based Field

`choiceBasedField` is a condition that links a dropdown's options to the value of another field. It is the foundation for dependent (cascading) dropdowns — for example, Continent → Country → State.

`choiceBasedField` is documented in detail in [Dependent Dropdowns](./dependent-dropdown), which covers its full schema, the `primaryFieldId` / `choiceMapping` / `showAllWhenNotMapped` properties, and how to chain more than two levels.

## Supported components

The table below lists which conditional rule types each component supports. Anything outside a component's row is not supported and is ignored by the renderer.

| Component | Conditional Visibility | Conditional Hide | Conditional Required | Conditional Read-Only | Conditional Disable | Set Value When | Choice-Based Field |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Textbox | Yes | Yes | Yes | Yes | Yes | Yes | — |
| Text Area | Yes | Yes | Yes | Yes | Yes | Yes | — |
| Numeric Textbox | Yes | Yes | Yes | Yes | Yes | Yes | — |
| Masked Input | Yes | Yes | Yes | Yes | Yes | Yes | — |
| Multiselect | Yes | Yes | Yes | Yes | Yes | Yes | — |
| Date Picker | Yes | Yes | Yes | Yes | Yes | Yes | — |
| DateTime Picker | Yes | Yes | Yes | Yes | Yes | Yes | — |
| Time Picker | Yes | Yes | Yes | Yes | Yes | Yes | — |
| Date Range Picker | Yes | Yes | Yes | Yes | Yes | Yes | — |
| Checkbox | Yes | Yes | — | — | Yes | — | — |
| Button | Yes | Yes | — | — | Yes | — | — |
| Switch | Yes | Yes | — | — | Yes | — | — |
| Split button | Yes | Yes | — | — | Yes | — | — |
| Image Editor | Yes | Yes | — | — | Yes | — | — |
| File Uploader | Yes | Yes | — | — | Yes | — | — |
| Color Picker | Yes | Yes | — | — | Yes | — | — |
| Radio button | Yes | Yes | Yes | No | Yes | Yes | — |
| Checkbox group | Yes | Yes | Yes | No | Yes | Yes | — |
| Dropdown list | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Rating | Yes | Yes | Yes | Yes | No | Yes | — |
| Range Slider | Yes | Yes | No | Yes | Yes | Yes | — |
| Signature | Yes | Yes | — | — | — | — | — |
| Message | Yes | Yes | — | — | — | — | — |
| Panel | Yes | Yes | — | — | — | — | — |
| Table | Yes | Yes | — | — | — | — | — |
| Tabs | Yes | Yes | — | — | — | — | — |
| Card | Yes | Yes | — | — | — | — | — |
| HTML | Yes | Yes | — | — | — | — | — |
| Rich Text Editor | Yes | Yes | — | Yes | Yes | — | — |
| Data Grid | Yes | Yes | — | — | — | — | — |
