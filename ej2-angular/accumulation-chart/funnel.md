---
layout: post
title: Funnel in Angular Accumulation chart component | Syncfusion
description: Learn here all about Funnel in Syncfusion Angular Accumulation chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Funnel 
documentation: ug
domainurl: ##DomainURL##
---

# Funnel in Angular Accumulation chart component

To render a funnel series, use the series [`type`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#type) as `Funnel` and inject, the `FunnelSeries` module  into the `@NgModule.providers`.

To known about funnel charts, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=ckgEx9oNUXw" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs1" %}

## Size

The size of the funnel chart can be customized by using the  `width` and `height` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs2" %}

## Neck Size

The funnel's neck size can be customized by using the `neckWidth` and `neckHeight` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs3" %}

## Gap between the segments

Funnel chart provides options to customize the space between the segments by using the `gapRatio` property of the series. It ranges from 0 to 1.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs4" %}

## Explode

Points can be exploded on mouse click by setting the `explode` property to true. You can also explode the point on load using `explodeIndex`. Explode distance can be set by using `explodeOffset` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs5" %}

## Smart Data Label

It provides the data label smart arrangement of the funnel and pyramid series. The overlap data label will be placed on left side of the funnel/pyramid series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs6" %}

## Customization

Individual points can be customized using the `pointRender` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs7" %}

## See Also

* [Data label](./data-label/)
* [Grouping](./grouping/)