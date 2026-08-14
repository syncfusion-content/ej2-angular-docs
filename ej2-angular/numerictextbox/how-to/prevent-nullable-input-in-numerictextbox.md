---
layout: post
title: How to prevent nullable input in Angular Numeric Textbox | Syncfusion
description: Prevent null values in the Angular Numeric Textbox by handling the change event to reset the value to a default when the user clears the input field.
platform: ej2-angular
control: Prevent nullable input in numerictextbox 
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent nullable input in Angular Numeric Textbox

By default, the NumericTextBox value can be set to `null`. To ensure the NumericTextBox always contains a value, use the following approach to prevent nullable input.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/numerictextbox/nullable-input-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/nullable-input-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/nullable-input-cs1" %}