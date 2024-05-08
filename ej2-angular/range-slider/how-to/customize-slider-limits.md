---
layout: post
title: Customize slider limits in Angular Range slider component | Syncfusion
description: Learn here all about Customize slider limits in Syncfusion Angular Range slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize slider limits 
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider limits in Angular Range slider component

Slider appearance can be customized via CSS. By overriding the slider CSS classes, the slider limit bar can be customized. Here, the limit bar is customized with different background color. By default, the slider has class `e-limits` for limits bar. You can override the class with our own color values as given in the following code snippet.

```css

.e-slider-container.e-horizontal .e-limits {
     background-color: rgba(69, 100, 233, 0.46);
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/limits-customization-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/limits-customization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/limits-customization-cs2" %}
