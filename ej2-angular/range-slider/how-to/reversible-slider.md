---
layout: post
title: Reversible Range Slider in Angular Range Slider component | Syncfusion
description: Learn here all about Reversible Range Slider in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider
documentation: ug
domainurl: ##DomainURL##
---


# Reversible Range Slider in Angular

Create a Range Slider with reversed value ordering by swapping the [min](https://ej2.syncfusion.com/angular/documentation/api/slider#min) and [max](https://ej2.syncfusion.com/angular/documentation/api/slider#max) properties. Set `min` to the maximum value and `max` to the minimum value. The following example demonstrates this approach.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/reversible-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/reversible-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/reversible-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/reversible-cs1" %}

> **Note**: For [Horizontal](https://ej2.syncfusion.com/angular/documentation/api/slider/sliderOrientation/) orientation sliders, you can alternatively achieve reversed order by enabling right-to-left support via the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/slider#enablertl) property.