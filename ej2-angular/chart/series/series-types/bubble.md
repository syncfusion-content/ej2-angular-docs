---
layout: post
title: Bubble Chart in Angular Charts | Syncfusion
description: Learn here all about Bubble in Syncfusion Angular Charts component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bubble
documentation: ug
domainurl: ##DomainURL##
---

# Bubble Chart in Angular Charts

## Bubble

A bubble series renders data as bubbles whose size is proportional to a third value (the z-value), with the position determined by the x and y values.

<img src="../../../images/bubble.png" alt="Bubble chart displaying data points with varying sizes representing three-dimensional data">

Configure a bubble series as follows:

1. **Set the series type**: Set the series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#type) to `Bubble`.
2. **Register the service**: Register `BubbleSeriesService` in the module `providers` array, or in `ApplicationConfig.providers` for standalone applications. Confirm that `ChartModule` is imported.
3. **Map the data fields**: Bind the data with [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#datasource), and map the x, y, and bubble-size fields with [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#xname), [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#yname), and [`size`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#size).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bubble-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bubble-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bubble-cs1/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/bubble-cs1" %}

## Series customization

Customize a bubble series using the following properties.

### Fill

Use the [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#fill) property to set a single solid bubble color. Accepted values are CSS color names (for example, `blue`), hexadecimal strings (for example, `#1A75FF`), and `rgba(...)` strings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bubble-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bubble-cs/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bubble-cs/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/bubble-cs" %}

### Opacity

Use the [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#opacity) property to control bubble transparency. Set a value from `0` (fully transparent) to `1` (fully opaque).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bubble-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bubble-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bubble-cs4/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/bubble-cs4" %}

### Size mapping

Use the [`size`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#size) property to map each bubble radius to a numeric value from the data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bubble-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bubble-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bubble-cs2/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/bubble-cs2" %}

## Empty points

A data point whose mapped value is `null` or `undefined` is empty. Configure its behavior with [`emptyPointSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#mode).

### Mode

Use [`mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#mode) to control empty-point rendering. The default is `Gap`.

| Mode      | Visual behavior |
|-----------|-----------------|
| `Gap`     | Skip the empty point; subsequent bubbles are still rendered. |
| `Zero`    | Treat the empty point as `0` and render the bubble at the origin. |
| `Drop`    | Drop the empty bubble; subsequent points are still rendered. |
| `Average` | Replace the empty value with the average of the surrounding points. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bubble-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bubble-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bubble-cs5/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/bubble-cs5" %}

### Empty-point fill

Use the [`emptyPointSettings.fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#fill) property to customize the fill color of empty-point bubbles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bubble-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bubble-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bubble-cs6/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/bubble-cs6" %}

### Empty-point border

Use the [`emptyPointSettings.border`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#border) property to customize the width and color of an empty-point bubble's stroke.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bubble-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bubble-cs7/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bubble-cs7/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/bubble-cs7" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/angular/documentation/api/chart#seriesrender) event allows you to customize series properties, such as `data`, `fill`, and `name`, before they are rendered on the chart. The callback receives an `ISeriesRenderEventArgs` argument that exposes mutable `series` and `data` properties.

```html
<ejs-chart (seriesRender)="onSeriesRender($event)"></ejs-chart>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bubble-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bubble-cs8/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bubble-cs8/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/bubble-cs8" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart#pointrender) event allows you to customize each data point before it is rendered on the chart. The callback receives an `IPointRenderEventArgs` argument that exposes the current `point`, `series`, `fill`, and `border`, plus a `cancel` flag.

```html
<ejs-chart (pointRender)="onPointRender($event)"></ejs-chart>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bubble-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bubble-cs9/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bubble-cs9/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/bubble-cs9" %}

## Troubleshooting

The following symptoms map to the most common configuration issues.

- **Bubbles are not rendered**: Confirm that `BubbleSeriesService` is registered, the series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#type) is `Bubble`, and that `xName`, `yName`, and `size` map to numeric fields in the data source.
- **All bubbles are the same size**: The `size` field is missing or non-numeric. Verify the data type and clamp values.
- **An empty point renders as a zero-radius bubble**: Review `emptyPointSettings.mode`. Use `Gap` to skip rendering or `Drop` to keep subsequent bubbles.
- **`pointRender` does not fire**: Confirm you bind the event on the `<ejs-chart>` element with `(pointRender)="..."`, not on the series.

## See also

* [Data labels](../../chart-elements/data-labels)
* [Tooltip](../../chart-interactive/tool-tip)
* [Axis customization](../../axis/axis-customization)
* [Data binding](../../data-binding/working-with-data)
* [Legend](../../chart-elements/legend)
