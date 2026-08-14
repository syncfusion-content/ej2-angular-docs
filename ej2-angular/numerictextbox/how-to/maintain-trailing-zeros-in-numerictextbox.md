---
layout: post
title: How to maintain trailing zeros in Angular Numeric Textbox | Syncfusion
description: Preserve trailing zeros in the Angular Numeric Textbox while focused by handling focus and blur events to reapply the formatted decimal value on focus.
platform: ej2-angular
control: Maintain trailing zeros in numerictextbox 
documentation: ug
domainurl: ##DomainURL##
---

# How to maintain trailing zeros in Angular Numeric Textbox

By default, trailing zeros are removed when the NumericTextBox receives focus. Use the following approach to preserve trailing zeros during focus.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/numerictextbox/trailing-zeros-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/trailing-zeros-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/trailing-zeros-cs1" %}