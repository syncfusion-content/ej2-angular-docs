---
layout: post
title: Ticks in Angular Range Slider component | Syncfusion
description: Learn here all about Ticks in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# Ticks in Angular Range Slider component

The [`ticks`](https://ej2.syncfusion.com/angular/documentation/api/slider/#ticks) in Slider supports you to easily identify the current value/values of the Slider. It contains [`smallStep`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksDataModel/#smallstep) and [`largeStep`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksDataModel/#largestep). The value of the major ticks alone will be displayed in the slider. In order to enable/disable the small ticks, use the [`showSmallTicks`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksDataModel/#showsmallticks) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/ticks-01-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/ticks-01-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/ticks-01-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/ticks-01-cs1" %}

## Step

When the Slider is moved, it increases/decreases the value based on the step value. By default, the value is increased/decreased by 1. Use the [`step`](https://ej2.syncfusion.com/angular/documentation/api/slider/#step) property to change the increment step value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/ticks-02-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/ticks-02-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/ticks-02-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/ticks-02-cs1" %}

## Min and Max

Enables the minimum/starting and maximum/ending value of the Slider, by using the [`min`](https://ej2.syncfusion.com/angular/documentation/api/slider/#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/slider/#max) property. By default, the minimum value is 1 and maximum value is 100. In the following sample the slider is rendered with the min value as 100 and max value as 1000.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/ticks-03-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/ticks-03-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/ticks-03-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/ticks-03-cs1" %}
