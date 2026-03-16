---
layout: post
title: Response actions in Angular Inline AI Assist | Syncfusion
description:  Checkout and learn about response items with Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Response actions in Angular Inline AI Assist component

You can render response action popup by using `items` property in the [responseSettings](../api/inline-ai-assist#responsesettings) property.

## Built-in response items

By default, the response popup displays the built-in `accept` and `reject` items, allowing users to accept or reject the response. The response action popup is shown after a response is generated.

In the following example, the Inline AI Assist component is rendered with built-in response settings items such as `accept` and `reject`.

## Adding custom items

You can use the [responseToolbarSettings](../api/inline-ai-assist#responsetoolbarsettings) property to add custom items for the response popup in Inline AI Assist. The custom items will be added with the existing built-in items in the response popup.

### Setting id

You can use the `id` property to assign a unique identifier to response items and perform actions based on the selected item.

### Adding iconCss

Include icons by using `iconCss` property on a response item to show an icon alongside the label.

### Setting disabled

You can use the `disabled` property to disable an item, preventing it from being selected in the response popup. By default, its value is `false`.

### Setting label

You can use the `label` property to specify the visible text for an item in the response popup; this text describes the action that will be performed when selected.

### Configure groupby

To visually group response items, use `groupBy` property. The popup will group items by the `groupBy` value and render group headers in response action popup.

### Setting tooltip text

You can use the `tooltip` property to specify the tooltip text to be displayed on hovering the response item in the popup.

## Configure item select

The [itemSelect](../api/inline-ai-assist/responseSettingsModel#itemselect) event is triggered when an item is selected from the response popup in the Inline AI Assist component.
