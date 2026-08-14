---
layout: post
title: How to customize spin buttons in Angular Numeric Textbox | Syncfusion
description: Customize the Angular Numeric Textbox spin up and spin down icons by overriding the e-spin-up and e-spin-down CSS pseudo-element content and color.
platform: ej2-angular
control: Customize the spin buttons up and down arrow 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize spin buttons in Angular Numeric Textbox

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
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/numerictextbox/custom-icons-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/custom-icons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/custom-icons-cs1" %}