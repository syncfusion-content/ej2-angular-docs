---
layout: post
title: Stacked Bar Chart in Angular Charts | Syncfusion
description: Learn here all about Stacked Bar Chart in Syncfusion Angular Charts component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stacked Bar
documentation: ug
domainurl: ##DomainURL##
---
# Stacked Bar Chart in Angular Charts

## Stacked Bar

To render a [stacked bar](https://www.syncfusion.com/angular-components/angular-charts/chart-types/stacked-bar-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#type) as `StackingBar` in your chart configuration. This indicates that the data should be represented as a stacked bar chart, where each bar consists of multiple segments stacked horizontally on top of each other.

2. **Inject the StackingBarSeries module**: Use the `@NgModule.providers` method to inject the `StackingBarSeriesService` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering stacked bar series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bar-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bar-cs2/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs2" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#yname) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bar-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bar-cs2/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs2" %}

## Series customization

The following properties can be used to customize the `stacked bar` series.

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackbar-cs" %}

The [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#fill) property can be used to apply a gradient color to the stacked bar series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs1/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackbar-cs1" %}

**Opacity**

The [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs2/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackbar-cs2" %}

**Border**

Use the [border](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#border) property to configure the border width, color, and dasharray of the stacked bar series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs4/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackbar-cs4" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs5/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackbar-cs5" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#fill) property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs6/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackbar-cs6" %}


**Border**

Use the [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#border) property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs7/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs7/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackbar-cs7" %}

## Stacking group

Use the [`stackingGroup`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#stackinggroup) property to group stacked bars and 100% stacked bars. Bars with the same group name are stacked on top of each other.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs8/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs8/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackbar-cs8" %}

## Cylindrical stacked bar chart

To render a cylindrical stacked bar chart, set the [`columnFacet`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bar-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bar-cs8/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bar-cs8/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs8" %}

## Stack labels

The stack labels in stacked charts display cumulative total values for stack segments directly using data labels. If a stacked point has negative values, the stack labels are displayed below the point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bar-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bar-cs22/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bar-cs22/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs22" %}

### Stack labels customization
Stack labels have various properties for customization to enhance the visual based on your requirements:

* [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/stackLabelSettings#visible) - Specifies whether stack labels are visible. Setting to true will display the labels. Default is false.
* [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/stackLabelSettings#fill) - Defines the background color of the stack labels. Accepts valid CSS color strings (hex, RGBA, etc.). Default is transparent.
* [`format`](https://ej2.syncfusion.com/angular/documentation/api/chart/stackLabelSettings#format) - Formats the text displayed in the stack labels. Supports placeholders like {value}. Default is null.
* [`angle`](https://ej2.syncfusion.com/angular/documentation/api/chart/stackLabelSettings#angle) - Specifies the rotation angle for stack labels in degrees. Default is 0.
* [`rx`](https://ej2.syncfusion.com/angular/documentation/api/chart/stackLabelSettings#rx) - Defines the rounded corner radius along the X-axis (horizontal direction) for the stack label background. Default is 5.
* [`ry`](https://ej2.syncfusion.com/angular/documentation/api/chart/stackLabelSettings#ry) - Defines the rounded corner radius along the Y-axis (vertical direction) for the stack label background. Default is 5.
* [`margin`](https://ej2.syncfusion.com/angular/documentation/api/chart/stackLabelSettings#margin) - Configures the margin around the stack label (left, right, top, and bottom).
* [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/stackLabelSettings#border) - Configures the appearance of the stack label's border.
* [`font`](https://ej2.syncfusion.com/angular/documentation/api/chart/stackLabelSettings#font) - Customizes the stack label text, including font size, color, style, weight, and family.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bar-cs22A/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bar-cs22A/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bar-cs22A/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs22A" %}

## Corner radius

The [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#cornerradius) property in the chart series is used to customize the corner radius for stacked bar series. This allows you to create stacked bars with rounded corners, giving your chart a more polished appearance. You can customize each corner of the stacked bars using the topLeft, topRight, bottomLeft, and bottomRight properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs10A/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs10A/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs10A/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs10A" %}

### Point corner radius

You can customize the corner radius for individual points in the chart series using the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs)event by setting the [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs#cornerradius) property in its event argument.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs10B/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs10B/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs10B/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs10B" %}

## Events

### Series render 

The [`seriesRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iSeriesRenderEventArgs) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs9/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs9/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackbar-cs9" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackbar-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackbar-cs10/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackbar-cs10/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs10" %}


## See Also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Add a Header to the Tooltip in Angular Stacked Bar Chart](https://support.syncfusion.com/kb/article/21516/how-to-add-a-header-to-the-tooltip-in-angular-stacked-bar-chart)
* [Dynamically Add Series to Angular Chart](https://support.syncfusion.com/kb/article/21485/how-to-dynamically-add-series-to-angular-chart-component)