---
layout: post
title: Form Schema in Angular Form Renderer Component | Syncfusion
description: Learn here all about the JSON schema structure that drives the Syncfusion Angular Form Renderer component of Syncfusion Essential JS 2 and more.
control: Form Schema
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Form Schema in Angular Form Renderer component

The Form Renderer is a schema-driven component. Everything the form renders — fields, layout, validation, conditional logic, and expression values — is declared in a single JSON object called the **form schema**, and that schema is passed to the component through the `schema` property.

```html
<ejs-form-renderer id="form-renderer-control" :schema="formSchema"></ejs-form-renderer>
```

## Creating the Form Schema Visually

Design custom forms visually and export their schema in seconds with our interactive [Form Builder](https://ej2.syncfusion.com/showcase/react/form-builder/#/dashboard) — a powerful no-code tool for building responsive forms through an intuitive drag-and-drop interface.

## Form Schema Definitions

A schema is a JSON object with the following root keys:

| Member | Type | Purpose |
| --- | --- | --- |
| `version` | `string` | Defines the schema version. |
| `properties` | `Record<string, FieldProperties>` | A flat key-value map containing the property definitions for each field in the form. |
| `layout` | `LayoutNode[]` | Tree of layout nodes that determines where each field is rendered within the form. |
| `settings` | `FormSettings` | Global form settings — name, size, etc. |

### Properties Definitions

Every field entry in the schema shares common properties that apply to every widget. These fields control identity (`name`), presentation (`label`, `size`, `labelPosition`), data shape (`type`), and behavior (`disabled`, `tooltip`).

A flat dictionary where each key represents a property and its corresponding value defines that property's configuration. All property keys must be unique.

| Property | Type | Description |
| --- | --- | --- |
| `name` | `string` | Programmatic name of the field. Used to read/write the value in `formState`, in expressions, and in the submitted `data` payload. Must be unique within the form. |
| `id` | `string` | The unique identifier of the field which will be used in internal mappings such as conditions and dependent dropdowns. |
| `widget` | `string` | The Syncfusion widget that renders the field. See [Supported components](#supported-components) for the full list. |
| `label` | `string` | The text shown next to the field. Also used as the accessible name. |
| `type` | `'string' \| 'number' \| 'boolean' \| 'array'` | Underlying data type of the field. Drives the validation rules, the submitted payload shape, and the inferred widget when `widget` is omitted. |
| `tooltip` | `string` | Tooltip shown on the field's info icon. |
| `disabled` | `boolean` | Renders the field in a disabled, non-interactive state. |
| `labelPosition` | `'Top' \| 'Bottom' \| 'Left' \| 'Right'` | Position of the label relative to the input. Defaults to `Top`. |
| `size` | `string` | UI size variant applied to the field's widget. Takes values such as `Small`, `Medium`, or `Bigger`. |
| `min` | `number \| string` | Minimum allowed value. Interpreted as a number for numeric widgets and as a date / time for date / time widgets. `number`, `date`, `dateTime`, `time`, `dateRange`, `rangeSlider` |
| `max` | `number \| string` | Maximum allowed value. Interpreted as a number for numeric widgets and as a date / time for date / time widgets. `number`, `date`, `dateTime`, `time`, `dateRange`, `rangeSlider` |

> For `min` and `max` that depend on the value of **another field**, see [Min/Max Range Based on Other Fields](./min-max-range). The property described there is `minMaxRange`, which keeps the bound in sync with a source field.


```json
{
  "properties": {
    "firstName": {
      "name": "firstName",
      "type": "string",
      "label": "First Name",
      "widget": "textbox"
    },
    "country": {
      "name": "country",
      "type": "string",
      "label": "Country",
      "widget": "dropdown",
      "options": ["United States", "United Kingdom", "India", "Germany"]
    }
  }
}
```

### Layout Definitions

The `layout` property in the form schema defines the layout nodes within which the widgets are placed. The example below uses the same `firstName` and `country` fields defined above, both placed within a single panel:

```json
{
  "layout": [
    {
      "type": "panel",
      "label": "Personal Information",
      "children": [
        { "type": "field", "propertyId": "firstName" },
        { "type": "field", "propertyId": "country" }
      ]
    }
  ]
}
```

### Settings Definition

The `settings` property defines the form-wide options applied to the root form element.

```json
{
  "settings": {
    "name": "Customer Feedback Form",
    "size": "Bigger"
  }
}
```

## Supported components

Every entry in `properties` must declare a `widget` from the following table. The list is closed: any value not listed here is treated as a plain `textbox` for safety.

### Supported widgets

| Widget | `type` | Description |
| --- | --- | --- |
| `textbox` | `string` | Single-line text input. |
| `textarea` | `string` | Multi-line text input. |
| `number` | `number` | Numeric input. |
| `inputMask` | `string` | Masked input for phone numbers, IDs, etc. |
| `rangeSlider` | `number` | Slider bound to a numeric range. |
| `rating` | `number` | Star rating. |
| `checkbox` | `boolean` | Single boolean checkbox. |
| `switch` | `boolean` | Toggle switch. |
| `radio` | `string` | Single-choice radio group. |
| `checkboxGroup` | `array` | Multi-choice checkbox group. |
| `dropdown` | `string` | Single-select dropdown. |
| `multiselect` | `array` | Multi-select dropdown. |
| `date` | `string` | Date picker. |
| `dateTime` | `string` | Date-time picker. |
| `time` | `string` | Time picker. |
| `dateRange` | `string` | Date range picker. |
| `colorPicker` | `color` | Color picker. |
| `button` | `button` | Plain, submit, or reset button. Triggers form submit / reset for `submit` / `reset` types; raises `onButtonClick` for plain button clicks. |
| `splitButton` | `string` | Button with a primary action and a dropdown of secondary actions. |
| `message` | `message` | Inline informational / success / warning / error message. Renders no input. |
| `signature` | `sign` | Hand-drawn signature pad. Stored as a base64 data URL. |
| `imageEditor` | `image` | Image with crop / draw / annotate. Stored as a data URL. |
| `fileUpload` | `file` | Single or multi file uploader. |
| `staticHtml` | `string` | Renders an arbitrary HTML snippet from `defaultValue`. Does not produce a submission value. |
| `richTextEditor` | `string` | Rich text editor. |
| `dataGrid` | `grid` | Editable grid. Column definitions live under the field's `columns` array. |

### Layout containers

Layout containers are **not** placed inside `properties`; they are placed inside `layout`. The fields they contain still live in `properties` and are referenced from the container's `children`.

| Widget | Description |
| --- | --- |
| `panel` | A titled box that groups related fields. |
| `table` | A grid of rows and columns. Each cell can contains own list of fields. |
| `tabs` | A tab strip. Each tab holds its own list of fields. |
| `card` | A boxed content area with title and subtitle. |

## Validations

Validation rules are declared directly on the field inside `properties`. The Form Renderer supports the full set of built-in rules — `required`, `minLength`, `maxLength`, `min`, `max`, `pattern` and others — plus a `customValidation` array for any rule that cannot be expressed declaratively. The renderer runs validations on submit and, for the most common rules, on change as the user types.

For the full reference — every built-in rule, the structure of `customValidation`, and the available variables (`input`, `{name}` references, expression operators) — see [Validations](./validations).

## Conditional rules

A form can change its behavior in response to what the user enters. Fields can be shown, hidden, required, read-only, disabled, or auto-populated based on the value of another field — all declared in the schema, with no hand-written change handlers.

The Form Renderer exposes these behaviors through dedicated properties on a field, each covered in its own topic:

* [Conditional Rules](./conditions)
* [Dependent Dropdowns](./dependent-dropdown)
* [Min/Max Range Based on Other Fields](./min-max-range)

## Expressions

A field can compute its value using an expression defined in `expressionValue`. Reference another field by enclosing its name in curly braces (`{name}`). The renderer replaces these references with their current values and evaluates the expression, ensuring that the expression field always uses the latest values.

For the full expression syntax — supported operators, built-in constants, and additional examples — see [Expressions](./expressions).

