---
layout: post
title: How to build a Reversible Angular Slider | Syncfusion
description: Reverse the Angular Slider value direction by swapping the min and max properties, or by enabling enableRtl for horizontal layouts.
platform: ej2-angular
control: Slider
documentation: ug
domainurl: ##DomainURL##
---


# How to build a Reversible Angular Slider

Create a Angular Slider with reversed value ordering by swapping the [min](https://ej2.syncfusion.com/angular/documentation/api/slider#min) and [max](https://ej2.syncfusion.com/angular/documentation/api/slider#max) properties. Set `min` to the maximum value and `max` to the minimum value. The following example demonstrates this approach.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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