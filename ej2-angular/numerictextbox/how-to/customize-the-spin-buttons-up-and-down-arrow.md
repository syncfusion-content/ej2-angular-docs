---
layout: post
title: Customize the spin buttons up and down arrow in Angular Numerictextbox component | Syncfusion
description: Learn here all about Customize the spin buttons up and down arrow in Syncfusion Angular Numerictextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize the spin buttons up and down arrow 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the spin buttons up and down arrow in Angular NumericTextBox component

The spin button icons can be customized by overriding the `e-spin-up` and `e-spin-down` CSS classes. The following example demonstrates how to change the spin up and down icons using custom CSS.

```css
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