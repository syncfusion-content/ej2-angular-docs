---
layout: post
title: Maintain trailing zeros in numerictextbox in Angular Numerictextbox component | Syncfusion
description: Learn here all about Maintain trailing zeros in numerictextbox in Syncfusion Angular Numerictextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Maintain trailing zeros in numerictextbox 
documentation: ug
domainurl: ##DomainURL##
---

# Maintain trailing zeros in NumericTextBox in Angular NumericTextBox component

By default, trailing zeros are removed when the NumericTextBox receives focus. Use the following approach to preserve trailing zeros during focus.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/trailing-zeros-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/trailing-zeros-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/trailing-zeros-cs1" %}