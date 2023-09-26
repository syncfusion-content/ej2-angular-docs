---
layout: post
title: Customization in Angular Progress bar component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Progress bar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---
# Customization in Angular Progress bar component

## Segments

We can divide a progress bar into multiple segments using a `segmentCount` to visualize the progress of multiple sequential tasks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/customization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/customization-cs1" %}

## Thickness

Customize the thickness of the track using [`trackThickness`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/progressBarModel/#trackthickness), progress using [`progressThickness`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/progressBarModel/#progressthickness) and secondary progress using [`secondaryProgressThickness`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/progressBarModel/#secondaryprogressthickness) to render the progress bar with different appearances.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/customization-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/customization-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/customization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/customization-cs2" %}

## Min, Max, and Value

The progress bar value is set by using the `value` property in progress bar. The minimum and maximum value of the progress bar can be set by using the `min` and `max` property in the progress bar respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/customization-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/customization-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/customization-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/customization-cs3" %}

## Radius

The  radius of the progress bar can be customized using `radius` property and  corner can be customized by **cornerRadius** property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/customization-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/customization-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/customization-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/customization-cs4" %}

## InnerRadius

The inner radius of the progress bar can be customized using `innerRadius` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/customization-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/customization-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/customization-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/customization-cs5" %}

## Progress color and track color

Customize the color of progress, secondary progress, and track by using the [`progressColor`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/progressBarModel/#progresscolor), [`secondaryProgressColor`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/progressBarModel/#secondaryprogresscolor), and [`trackColor`](https://ej2.syncfusion.com/angular/documentation/api/progressbar/progressBarModel/#trackcolor) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/customization-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/customization-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/customization-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/customization-cs6" %}