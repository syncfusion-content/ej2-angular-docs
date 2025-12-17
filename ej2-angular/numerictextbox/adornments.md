---
layout: post
title: Adornments in ##Platform_Name## NumericTextBox control | Syncfusion
description: Learn here all about Adornments in Syncfusion ##Platform_Name## NumericTextBox control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adornments
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in ##Platform_Name## NumericTextBox control

Adornments allow you to add custom elements before or after the numeric textbox using the `prependTemplate` and `appendTemplate` properties. These elements can include currency symbols, unit labels, or action icons to provide context and quick actions without affecting numeric behavior or float label functionality.

## Common Use Cases

- **Currency Symbols**: Add indicators like $, €, ¥ for monetary inputs.
- **Unit Labels**: Show measurement units (kg, cm, km).
- **Action Icons**: Include buttons for clear, reset, or custom actions.
- **Visual Context**: Display icons for input type or status.

## Adding Adornments to NumericTextBox

Use `prependTemplate` and `appendTemplate` to inject HTML content before and after the masked input respectively. These templates do not alter mask behavior and support any inline HTML or icon.

**prependTemplate**: Renders elements before the numeric textbox.
**appendTemplate**: Renders elements after the numeric textbox.

The following example demonstrates how to add adornments in the NumericTextBox control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/adornments-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/adornments-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/adornments-cs1" %}

