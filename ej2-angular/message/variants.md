---
layout: post
title: Variants in Angular Message component | Syncfusion
description: Learn here all about Variants in Syncfusion Angular Message component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Variants 
documentation: ug
domainurl: ##DomainURL##
---

# Variants in Angular Message component

The Message has predefined appearance variants for different visual representations. The variants of the message can be changed based on the [variant](https://ej2.syncfusion.com/angular/documentation/api/message/#variant) property.

The available variants are **Text**, **Outlined** and **Filled**. The default variant type for messages is **Text**.
* **Text** - The severity is differentiated using a text color and a light background color.
* **Outlined** - The severity is differentiated using a text color and a border without a background.
* **Filled** - The severity is differentiated using a text color and a dark background color.

The following example demonstrates the default message with different variant types.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/message/variants-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/message/variants-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/message/variants-cs1" %}
