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

You can create a Range Slider rendered with values in reverse order by setting the [min](https://ej2.syncfusion.com/angular/documentation/api/slider#min) property to the maximum value and the [max](https://ej2.syncfusion.com/angular/documentation/api/slider#max) property to the minimum value. An example of how to achieve a reversible Range Slider is shown below

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

> Reversible order can be achieved with [Horizontal](https://ej2.syncfusion.com/angular/documentation/api/slider/sliderOrientation/) orientation Range Slider by setting [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/slider#enablertl) as true.