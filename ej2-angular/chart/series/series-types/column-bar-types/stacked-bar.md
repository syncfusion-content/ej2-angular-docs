---
layout: post
title: 100% Stacked Bar Chart in Angular Charts | Syncfusion
description: Learn here all about 100% Stacked Bar Chart in Syncfusion Angular Charts component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 100% Stacked Bar chart
documentation: ug
domainurl: ##DomainURL##
---

# 100% Stacked Bar Chart in Angular Charts

## 100% Stacked Bar

A 100% stacked bar chart displays horizontal stacked bars normalized to a total of 100% for each category.
It is used to compare percentage contributions across categories.

<img src="../../../../images/stacked100-bar.png" alt="100% stacked bar chart showing percentage contributions across categories">

Configure a [100% stacked bar](https://www.syncfusion.com/angular-components/angular-charts/chart-types/100-stacked-bar-chart) series as follows:

1. **Set the series type**: Set the series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#type) to `StackingBar100`.
2. **Register the required services**: Add `ChartModule` to the component or NgModule `imports` array. Add `StackingBarSeriesService` and required axis services, such as `CategoryService`, to the `providers` array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bar-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bar-cs3/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bar-cs3/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs3" %}

## Binding data to a series

Bind an array of JSON objects or a `DataManager` instance with the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#datasource) property. Map the category field with [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#xname) and each series value field with [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#yname). Handle loading and request errors before assigning remote data to the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bar-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bar-cs3/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bar-cs3/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs3" %}

## Series customization

Use the following properties to customize a 100% stacked bar series.

### Solid fill

Use the [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#fill) property to set a solid CSS color for a series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs" %}

### Gradient fill

The [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#fill) property can apply an SVG gradient to a 100% stacked bar series. Define each gradient in an SVG `<defs>` element with a unique ID, and assign it to the series in the `url(#gradientId)` format.

Place the following SVG gradient definitions in the application's `index.html` file, inside the `<body>` element and outside the `<app-container>` element.

```html
<svg>
    <defs>
        <linearGradient id="gradient1">
            <stop offset="0%" style="stop-color:blue;stop-opacity:5" />
            <stop offset="50%" style="stop-color:violet;stop-opacity:5" />
        </linearGradient>
    </defs>
</svg>
<svg>
    <defs>
        <linearGradient id="gradient2">
            <stop offset="0%" style="stop-color:darkred;stop-opacity:5" />
            <stop offset="50%" style="stop-color:darkorange;stop-opacity:5" />
        </linearGradient>
    </defs>
</svg>
<svg>
    <defs>
        <linearGradient id="gradient3">
            <stop offset="0%" style="stop-color:darkgreen;stop-opacity:5" />
            <stop offset="50%" style="stop-color:darkslateblue;stop-opacity:5" />
        </linearGradient>
    </defs>
</svg>
```

Set the series `fill` values to `url(#gradient1)`, `url(#gradient2)`, and `url(#gradient3)`, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs1/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs1" %}

### Opacity

Use the [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#opacity) property to control series transparency. Set a value from `0` for fully transparent to `1` for fully opaque.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs2/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs2" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#border) property to customize the color and width of the series border.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs4/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs4" %}

## 100% cylindrical stacked bar chart

Set the [`columnFacet`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#columnfacet) property to `Cylinder` to render a 100% stacked bar series with a cylindrical shape. The default value is `Rectangle`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/bar-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/bar-cs9/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/bar-cs9/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/bar-cs9" %}

## Empty points

A data point whose mapped value is `null` or `undefined` is considered empty. Configure empty-point behavior with [`emptyPointSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#mode). The default mode is `Gap`.

### Mode

Use [`mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#mode) to control how the series handles an empty point. The supported modes are:

- `Gap`: Leaves a gap at the empty point. This is the default mode.
- `Zero`: Replaces the missing value with zero.
- `Average`: Replaces the missing value with an average derived from neighboring points.
- `Drop`: Omits the empty point from rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs5/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs5" %}

### Empty-point fill

Use [`emptyPointSettings.fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#fill) to set the fill color when the selected mode renders a replacement point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs6/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs6" %}

### Empty-point border

Use [`emptyPointSettings.border`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#border) to set the width and color of an empty point's border when the selected mode renders a replacement point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs7/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs7/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs7" %}

## Corner radius

### Series corner radius

Use [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#cornerradius) to round the corners of all points in the series. Configure individual corners with `topLeft`, `topRight`, `bottomLeft`, and `bottomRight`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs9A/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs9A/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs9A/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs9A" %}

### Point corner radius

Handle the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart#pointrender) event and set the event argument's [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs#cornerradius) property to customize an individual point before it is rendered.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs9B/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs9B/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs9B/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs9B" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/angular/documentation/api/chart#seriesrender) event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs8/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs8/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs8" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart#pointrender) event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedbar-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedbar-cs9/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/stackedbar-cs9/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedbar-cs9" %}


## Troubleshooting

- **No bars are displayed**: Confirm that `StackingBarSeriesService` and the required axis services are registered, the series type is `StackingBar100`, and the `xName` and `yName` fields exist in the data source.
- **A point is missing**: Check whether its mapped value is `null` or `undefined`, and review `emptyPointSettings.mode`.
- **A gradient is not displayed**: Confirm that the SVG gradient ID exists in `index.html` and matches the ID referenced by the series `fill` value.


## See also

* [Data labels](../../../chart-elements/data-labels)
* [Tooltip](../../../chart-interactive/tool-tip)
