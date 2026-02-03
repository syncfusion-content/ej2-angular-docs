---
layout: post
title: Error Bar Chart in Angular Charts | Syncfusion
description: Learn here all about Error Bar in Syncfusion Angular Charts component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Error Bar
documentation: ug
domainurl: ##DomainURL##
---

# Error Bar Chart in Angular Charts

## Error Bar

Error bars are graphical representations of the variability of data and are used on graphs to indicate the error or uncertainty in a reported measurement.

To render error bars for the series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Set visibility**: Set the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#type) property to **true** for the error bars to be displayed.

2. **Inject the ErrorBar module**: Use the `@NgModule.providers` method to inject the `ErrorBar` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering error bar series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/errorbar-cs1/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs1" %}

## Error bar type

To change the error bar rendering type using [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#type) option of error bar. To change the error bar line length you can use [`verticalError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#verticalError) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs2" %}

## Customizing error bar type

To customize the error bar type, set the error bar [`type`]([../../api/chart/errorBarSettings#type](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#type)) to `Custom`, and then change the horizontal or vertical positive and negative error values for the error bar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs3/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/errorbar-cs3/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs3" %}

## Error bar mode

The error bar mode is used to define whether the error bar line is drawn horizontally, vertically or on both sides. To change the error bar mode, use the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#mode) option.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/errorbar-cs4/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs4" %}

## Error bar direction

To change the direction of the error bars to plus, minus, or both sides, use the [`direction`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#direction) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/errorbar-cs5/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs5" %}

## Customizing error bar cap

To customize the length, width, opacity, and fill color of the error bar caps, you can use the [`errorBarCap`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#errorbarcap) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/errorbar-cs6/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs6" %}

## Customizing error bar color

To customise the error bar color for individual errors, use the [`errorBarColorMapping`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#errorbarcolormapping) property. You can also customize the vertical error, horizontal error, horizontal negative and positive error, and vertical negative and positive error for an individual point using the [`verticalError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#verticalerror), [`horizontalError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#horizontalerror), [`horizontalNegativeError`](../../api/chart/errorBarSettings#horizontalnegativeerror), [`horizontalPositiveError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#horizontalnegativeerror), [`verticalNegativeError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#verticalnegativeerror), and [`verticalPositiveError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel#verticalpositiveerror) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs7/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/errorbar-cs7/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs7" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iSeriesRenderEventArgs) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs8/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/errorbar-cs8/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs8" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs9/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/errorbar-cs9/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs9" %}

## See Also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)