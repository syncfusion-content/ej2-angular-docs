---
layout: post
title: Style appearance in Angular Numerictextbox component | Syncfusion
description: Learn here all about Style appearance in Syncfusion Angular Numerictextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in Angular NumericTextBox component

The following CSS structure can be used to customize the NumericTextBox appearance based on user preference.

## Customizing the appearance of NumericTextBox wrapper element

Use the following CSS to customize the NumericTextBox wrapper:

```css
/* To specify height and font size */
.e-input-group input.e-input,
.e-input-group.e-control-wrapper input.e-input,
.e-input-group textarea.e-input,
.e-input-group.e-control-wrapper textarea.e-input {
    height: 40px;
    font-size: 20px;
}
```

## Customizing the NumericTextBox icons

Use the following CSS to customize the NumericTextBox spin button icons:

```css
/* To specify font size and background color */
.e-numeric.e-control-wrapper.e-input-group .e-input-group-icon {
    font-size: 20px;
    background-color: beige;
}

/* To customize spin up and spin down icons */
.e-numeric .e-input-group-icon.e-spin-up:before {
    content: "\e823";
    color: rgba(0, 0, 0, 0.54);
}

.e-numeric .e-input-group-icon.e-spin-down:before {
    content: "\e934";
    color: rgba(0, 0, 0, 0.54);
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/custom-icons-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/custom-icons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/custom-icons-cs1" %}
