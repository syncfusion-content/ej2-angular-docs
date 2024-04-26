---
layout: post
title: Series types in Angular Accumulation chart component | Syncfusion
description: Learn here all about Series types in Syncfusion Angular Accumulation chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Series types 
documentation: ug
domainurl: ##DomainURL##
---

# Series types in Angular Accumulation chart component

<!-- markdownlint-disable MD036 -->

## Pyramid Chart

To render a pyramid series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#type) as `Pyramid`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pyramid-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pyramid-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pyramid-cs7" %}

## Funnel Chart

To render a funnel series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#type) as `Funnel`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs8" %}

## Customization of Accumulation Chart

## Size

Accumulation chart provides options to customize the size of the funnel or pyramid chart by using the  `width` and `height` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs9" %}

## Neck Size

The funnel neck size can be customized by using the `neckWidth` and `neckHeight` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs10" %}

## Gap between the segments

The space between the segments can be customized by using the `gapRatio` option of the series and
it is applicable for pyramid and funnel chart. It ranges from 0 to 1.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/funnel-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/funnel-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/funnel-cs11" %}

## Pyramid mode

Pyramid chart supports linear and surface modes of rendering. The default `pyramidMode` type is `linear`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pyramid-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pyramid-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pyramid-cs8" %}