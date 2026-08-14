---
layout: post
title: Adornments in Angular TextBox | Syncfusion
description: Add icons, buttons, or labels inside the Syncfusion Angular TextBox using prependTemplate and appendTemplate for passwords, currency, and validation.
platform: ej2-angular
control: Adornments
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in Angular TextBox

The TextBox component supports adornments that allow you to add custom elements before or after the textbox using `prependTemplate` and `appendTemplate`. Adornment elements can include icons, text labels, or action buttons to improve usability and provide visual context.

## Overview

Adornments are useful for:
- **Visual Context**: Adding icons that indicate the expected input type (e.g., user icon for username, envelope icon for email)
- **Functional Enhancement**: Including action buttons such as password visibility toggles or clear buttons
- **Input Validation**: Displaying validation status icons or error indicators
- **Unit Indicators**: Showing currency symbols, temperature units, domain extensions, or measurement units
- **Accessibility**: Providing visual and interactive guidance to help users enter data and improve discoverability.

## Common Use Cases

- **Visual Indicators**: Icons for expected input type (e.g., user icon for username, envelope icon for email).
- **Functional Enhancements**: Buttons for password visibility toggle or clear input.
- **Validation Status**: Icons for error or success indicators.
- **Unit Indicators**: Currency symbols, measurement units, or domain extensions.


## Adding Adornments to TextBox

Use the `prependTemplate` and `appendTemplate` properties to add custom HTML content before and after the textbox.

- **`prependTemplate`**: Renders elements before the textbox input.
- **`appendTemplate`**: Renders elements after the textbox input.

The following example demonstrates how to add adornments in the TextBox control.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/textbox/adornments-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/adornments-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [TextBox Adornments demo](https://ej2.syncfusion.com/angular/demos/#/tailwind3/textboxes/adornments).