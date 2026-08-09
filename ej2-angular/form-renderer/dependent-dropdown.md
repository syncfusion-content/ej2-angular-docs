---
layout: post
title: Dependent Dropdowns in Angular Form Renderer component | Syncfusion
description: Learn all about dependent dropdowns and the choiceBasedField condition in the Syncfusion Angular Form Renderer component of Syncfusion Essential JS 2 and more.
control: Dependent Dropdowns
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Dependent Dropdowns in Angular Form Renderer component

A dependent dropdown (also called a cascading dropdown) is a group of dropdowns in which the options available in one dropdown depend on the value selected in another. Common examples include Continent → Country → State, Product Category → Subcategory, and Vehicle Make → Model → Trim.

In the Form Renderer, dependent dropdowns are configured through the `choiceBasedField` condition in a field's `conditions` object of Form schema.

## JSON Schema structure for Dependent Dropdowns

`choiceBasedField` is a condition that you can add to dropdown list field's `conditions` object. It tells the renderer that this field's options should be filtered based on the value of another field. The condition links a child dropdown to a parent field and declares a `choiceMapping` that says which child options should be visible for each parent value.

The schema below renders three linked dropdowns — Continent, Country, and State / Province. Picking a continent narrows the list of countries, and picking a country then narrows the list of states / provinces:

```json
{
  "version": "0.1.0",
  "properties": {
    "continent": {
      "id": "dropdown_1785929315132_344",
      "name": "continent",
      "type": "string",
      "label": "Continent",
      "options": [
        "North America",
        "Asia",
        "Africa"
      ],
      "widget": "dropdown",
      "labelPosition": "top"
    },
    "country": {
      "id": "dropdown_1785929317818_264",
      "name": "country",
      "type": "string",
      "label": "Country",
      "options": [
        "USA",
        "Canada",
        "India",
        "Japan",
        "Kenya",
        "Nigeria"
      ],
      "widget": "dropdown",
      "labelPosition": "top",
      "conditions": {
        "choiceBasedField": {
          "primaryFieldId": "dropdown_1785929315132_344",  // Id of the parent field
          "choiceMapping": {
            "North America": [
              "USA",
              "Canada"
            ],
            "Asia": [
              "India",
              "Japan"
            ],
            "Africa": [
              "Kenya",
              "Nigeria"
            ]
          },
          "showAllWhenNotMapped": false
        }
      }
    },
    "stateProvince": {
      "id": "dropdown_1785929321561_940",
      "name": "state",
      "type": "string",
      "label": "State / Province",
      "options": [
        "California",
        "Texas",
        "Ontario",
        "British Columbia",
        "Tamil Nadu",
        "Karnataka",
        "Tokyo",
        "Osaka",
        "Nairobi County",
        "Mombasa County",
        "Lagos State",
        "Kano State"
      ],
      "widget": "dropdown",
      "labelPosition": "top",
      "conditions": {
        "choiceBasedField": {
          "primaryFieldId": "dropdown_1785929317818_264",
          "choiceMapping": {
            "USA": [
              "California",
              "Texas"
            ],
            "Canada": [
              "Ontario",
              "British Columbia"
            ],
            "India": [
              "Tamil Nadu",
              "Karnataka"
            ],
            "Japan": [
              "Tokyo",
              "Osaka"
            ],
            "Kenya": [
              "Nairobi County",
              "Mombasa County"
            ],
            "Nigeria": [
              "Lagos State",
              "Kano State"
            ]
          },
          "showAllWhenNotMapped": false
        }
      }
    }
  },
  "layout": [
    {
      "type": "field",
      "propertyId": "continent"
    },
    {
      "type": "field",
      "propertyId": "country"
    },
    {
      "type": "field",
      "propertyId": "stateProvince"
    }
  ],
  "settings": {
    "name": "Contact Us Form",
    "width": "650px"
  }
}
```

| Member | Type | Description |
| --- | --- | --- |
| `primaryFieldId` | `string` | The `id` of the parent field whose value drives the filtering. |
| `choiceMapping` | `Record<string, string[]>` | A map of parent value → child options. When the parent field's value is a key in this map, only the listed options are shown in the child dropdown. |
| `showAllWhenNotMapped` | `boolean` | Controls the behavior when the parent has no value or its value is not a key in `choiceMapping`. When `true`, the child shows every option declared in its own `options` array. When `false`, the child shows no options. |

> `primaryFieldId` references the parent's `id`, not the parent's `name`. This keeps the link robust against renames of the parent's programmatic name.

## Cascading across more than two levels

`choiceBasedField` only links two fields at a time, but you can chain it to build deeper cascades. Each level in the chain has its own `choiceBasedField` whose `primaryFieldId` points to the immediately-preceding level.

The schema above is a three-level example: Continent → Country → State / Province. The same pattern extends to four or more levels — for example, Continent → Country → State → City — by repeating the same `conditions` shape on each subsequent field.
