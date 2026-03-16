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

The [`ticks`](https://ej2.syncfusion.com/angular/documentation/api/slider/#ticks) property adds visual reference points to the slider, helping users identify available values. Ticks are configured using [`smallStep`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksDataModel/#smallstep) (minor ticks) and [`largeStep`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksDataModel/#largestep) (major ticks). By default, only major tick values are displayed. Use the [`showSmallTicks`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksDataModel/#showsmallticks) property to show or hide minor ticks.

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

The [`step`](https://ej2.syncfusion.com/angular/documentation/api/slider/#step) property controls the increment value when the slider is moved. By default, values increase or decrease by 1. Customize this value to suit your application requirements.

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

Set the minimum and maximum values of the Range Slider using the [`min`](https://ej2.syncfusion.com/angular/documentation/api/slider/#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/slider/#max) properties. By default, the minimum value is 1 and the maximum value is 100. The following sample demonstrates a slider configured with a minimum of 100 and maximum of 1000.

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
