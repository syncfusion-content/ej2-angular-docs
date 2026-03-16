---
layout: post
title: Adornments in Angular NumericTextBox control | Syncfusion
description: Learn here all about Adornments in Syncfusion Angular NumericTextBox control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adornments
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in Angular NumericTextBox control

Adornments allow you to add custom elements before or after the NumericTextBox input using the `prependTemplate` and `appendTemplate` properties. These templates support icons, labels, action buttons, and other visual elements while preserving numeric validation and float label functionality.

## Common Use Cases

- **Currency Symbols**: Display indicators like $, €, ¥ for monetary inputs.
- **Unit Labels**: Show measurement units (kg, cm, km, percentage).
- **Action Icons**: Include buttons for clear, reset, or custom operations.
- **Visual Feedback**: Display status indicators without affecting numeric behavior.

## Adding Adornments to NumericTextBox

Use `prependTemplate` to render elements before the numeric input, and `appendTemplate` to render elements after it. These templates support any inline HTML or icon markup and do not interfere with numeric validation.

- **prependTemplate**: Renders HTML content before the input field
- **appendTemplate**: Renders HTML content after the input field

The following example shows how to implement adornments in the NumericTextBox:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/adornments-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/adornments-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [NumericTextBox Adornments demo](https://ej2.syncfusion.com/angular/demos/#/tailwind3/numerictextbox/adornments).