---
layout: post
title: Variants in Angular Message | Syncfusion
description: Choose the Syncfusion Angular Message appearance with Text, Outlined, or Filled variants to match your application's design language.
platform: ej2-angular
control: Variants 
documentation: ug
domainurl: ##DomainURL##
---

# Variants in Angular Message

The Message has predefined appearance variants for different visual representations. The variants of the message can be changed based on the [variant](https://ej2.syncfusion.com/angular/documentation/api/message/index-default#variant) property.

The available variants are **Text**, **Outlined** and **Filled**. The default variant type for messages is **Text**.
* **Text** - The severity is differentiated using a text color and a light background color.
* **Outlined** - The severity is differentiated using a text color and a border without a background.
* **Filled** - The severity is differentiated using a text color and a dark background color.

The following example demonstrates the default message with different variant types.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/message/variants-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/message/variants-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/message/variants-cs1" %}
