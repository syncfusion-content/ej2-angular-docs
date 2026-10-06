---
layout: post
title: Min/Max Range from Other Fields in Angular Form Renderer | Syncfusion
description: Learn how to bind a field's minimum and maximum value to another field in the Angular Form Renderer using minMaxRange, with Angularive constraint updates.
control: Min/Max Range
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Min/Max Range Based on Other Fields in Angular Form Renderer component

Many forms need a field's allowed range to follow another field on the same form. Typical examples include capping **Purchased Quantity** at the **Total Quantity**, restricting a **Departure Date** to be no earlier than the **Arrival Date**, or letting a discount percentage go no higher than a configured cap.

The Form Renderer supports this declaratively through the `minMaxRange` property on a field via form schema. The minimum, maximum, or both, can be bound to the value of one or more other fields in the same form. The renderer re-applies the bound limits whenever the source field's value changes, so the constrained field stays in sync as the user types.

## `minMaxRange` structure

`minMaxRange` is an array of rule objects placed on a field. Each rule is evaluated independently and contributes its bound to the field's effective range. At least one of `minValue` or `maxValue` should be provided per rule.

> The `minValue` or `maxValue` properties also accept the corresponding widget's data type for setting the minimum and maximum range values.

| Property | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Turns the rule on or off without removing it from the schema. Set to `true` to apply the bound, `false` to keep the rule declared but inactive. |
| `minValue` | `number \| string \| { field: string }` | Optional. The minimum allowed value for the field. When provided, the field's value is constrained to be greater than or equal to this value. |
| `maxValue` | `number \| string \| { field: string }` | Optional. The maximum allowed value for the field. When provided, the field's value is constrained to be less than or equal to this value. |

A `{ field: string }` is an object that points to another field by its `id`:

| Property | Type | Description |
| --- | --- | --- |
| `field` | `string` | The id of the source field whose value drives the bound. |

> When the source field's value changes, the constraint on the dependent field is recomputed and applied.

In the schema below, `purchasedQuantity` is restricted so that it cannot exceed the value entered in `totalQuantity`. As `totalQuantity` is edited, the upper limit of `purchasedQuantity` moves with it.

```json
{
  "properties": {
    "totalQuantity": {
      "id": "number_1785966443509_373",
      "name": "totalQuantity",
      "type": "number",
      "label": "Total Quantity",
      "widget": "number",
      "labelPosition": "top",
      "numberFormat": "n0"
    },
    "purchasedQuantity": {
      "id": "number_1785966496509_796",
      "name": "purchasedQuantity",
      "type": "number",
      "label": "Purchased Quantity",
      "widget": "number",
      "minMaxRange": [
        {
          "enabled": true,
          "maxValue": {
            "field": "number_1785966443509_373"
          }
        }
      ],
      "labelPosition": "top",
      "numberFormat": "n0"
    }
  }
}
```

In this example, `purchasedQuantity` cannot be set to a value greater than `totalQuantity`. If the user tries to enter a value that exceeds the bound, the value will automatically reset to `totalQuantity`.

## Supported components

The table below lists which components support `minMaxRange`. Bounds are interpreted according to each component's value type — numeric for `number`, calendar dates for `date` / `datetime` / `date-range`, and so on.

| Component | Notes |
| --- | --- |
| Numeric Textbox | `minValue` / `maxValue` are interpreted as numbers. |
| Date Picker | `minValue` / `maxValue` are interpreted as dates. |
| DateTime Picker | `minValue` / `maxValue` are interpreted as date-time values. |
| Date Range Picker |Bounds apply to both the start and end of the range. |
| Time Picker | `minValue` / `maxValue` are interpreted as times. |
| Range Slider | `minValue` / `maxValue` shape the slider's track. |

> Refer to the [Validations](./validations) topic for static `min` / `max` rules, which set fixed bounds that do not depend on other fields.
