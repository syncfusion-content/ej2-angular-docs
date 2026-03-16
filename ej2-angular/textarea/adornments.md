---
layout: post
title: Adornments in ##Platform_Name## TextArea control | Syncfusion
description: Learn here all about Adornments in Syncfusion ##Platform_Name## TextArea control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adornments
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in ##Platform_Name## TextArea Control

The TextArea component supports adornments that allow you to add custom elements before or after the textarea using the `prependTemplate` and `appendTemplate` properties. Adornment elements can include icons, text labels, or action buttons for formatting and content management. You can arrange adornments horizontally or vertically using the `adornmentFlow` and `adornmentOrientation` properties for flexible layouts.

## Common Use Cases

- **Visual Indicators**: Icons for context (e.g., edit, comment).
- **Formatting Tools**: Buttons for bold, italic, underline.
- **Content Actions**: Save, clear, or submit buttons.
- **Validation & Status**: Character count or error icons.
- **Flexible Layout**: Horizontal or vertical adornment flow.

## Adding Adornments with Orientation to TextArea

Use the `prependTemplate` and `appendTemplate` properties to add custom HTML content before and after the TextArea.

- **`prependTemplate`**: Renders elements before the textarea input.

- **`appendTemplate`**: Renders elements after the textarea input.

Control how adornments are positioned and arranged using the `adornmentFlow` and `adornmentOrientation` properties. Both properties accept only `Horizontal` or `Vertical` values as defined in the `AdornmentsDirection` type.

- **`adornmentFlow`**: Defines where adornments appear around the TextArea.
  - **Horizontal**: Prepend on the left, append on the right.
  - **Vertical**: Prepend above, append below.

- **`adornmentOrientation`**: Defines how items inside each adornment are arranged.
  - **Horizontal**: Items displayed in a row.
  - **Vertical**: Items displayed in a column.

The following example demonstrates how to add adornments with orientation in the TextArea control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/adornments-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/adornments-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [TextArea Adornments demo](https://ej2.syncfusion.com/angular/demos/#/tailwind3/textarea/adornments).