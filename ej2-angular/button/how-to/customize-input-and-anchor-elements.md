---
layout: post
title: Customize input and anchor elements in Angular Button | Syncfusion
description: Style input and anchor elements as Angular Buttons using predefined e-btn classes such as e-link and e-primary.
platform: ej2-angular
control: Customize input and anchor elements 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize input and anchor elements in Angular Button

You can customize the appearance of the input and anchor elements using predefined styles through the class property. In the following code snippet, the input element is customized as a link button by setting the `e-btn e-link` class, and the anchor element is customized as a primary button by setting the `e-btn e-primary` class.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/button/custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button/custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button/custom-cs1" %}