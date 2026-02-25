---
layout: post
title: Adornments in Angular MaskedTextBox control | Syncfusion
description: Learn here all about Adornments in Syncfusion Angular MaskedTextBox control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adornments
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in Angular MaskedTextBox control

Adornments allow you to add custom elements before or after the MaskedTextBox input using the `prependTemplate` and `appendTemplate` properties. These templates support icons, labels, action buttons, and other visual elements while preserving mask validation and float label functionality.

## Common Use Cases

- **Entry Guidance**: Display icons or text that hints at the expected input format (e.g., a user icon for login fields).
- **Quick Actions**: Include buttons for common operations such as submit, clear, or copy.
- **Context Labels**: Add static text like country codes, domain names, or measurement units.
- **Visual Feedback**: Show status indicators without affecting mask behavior.

## Adding Adornments to MaskedTextBox

Use `prependTemplate` to render elements before the masked input, and `appendTemplate` to render elements after it. These templates support any inline HTML or icon markup and do not interfere with mask validation.

- **prependTemplate**: Renders HTML content before the input field
- **appendTemplate**: Renders HTML content after the input field

The following example shows how to implement adornments in the MaskedTextBox:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maskedtextbox/adornments-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maskedtextbox/adornments-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [MaskedTextBox Adornments demo](https://ej2.syncfusion.com/angular/demos/#/tailwind3/maskedtextbox/adornments).