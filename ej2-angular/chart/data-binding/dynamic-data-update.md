---
layout: post
title: Dynamic Data Update in Angular Chart | Syncfusion
description: Learn here all about dynamic data update in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic Data Update in Angular Chart

The Angular Chart component lets you update the data of a series at runtime without re-rendering the whole chart. This is useful for real-time data streams, user-driven editing, and incremental data loads. The sections below describe the available methods and show how to wire them up in a standalone Angular component.

## When to use which method

| Method | Use when |
|--------|----------|
| [`addPoint`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#addpoint) | You want to append a single new data point to an existing series. |
| [`removePoint`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#removepoint) | You want to delete a data point by its index. |
| [`setData`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#setdata) | You want to replace the entire data set of a series in one call. |

> The methods documented here operate on the live series object. They work with both local data sources and remote data sources that have already been loaded into the chart.

## Adding a new data point

Use the [`addPoint`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#addpoint) method to dynamically append a new data point to a series. This is useful for real-time data streams, user interactions, or incremental data loading. The method accepts the following parameters:

* **Data point** (required): The new data object to append to the series. It must include the fields mapped to the series' [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#yname).
* **Animation duration** (optional): Duration in milliseconds for the entry animation. If omitted, the chart's default animation duration is used.

**Sample behavior:** the following sample appends a new point (`{ x: 'Japan', y: 118.2 }`) to a Spline series when the **Add Point** button is clicked. The sample uses `@syncfusion/ej2-angular-buttons` to render the button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/dynamic-update/add-point/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/dynamic-update/add-point/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/dynamic-update/add-point" %}

## Removing an existing data point

Use the [`removePoint`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#removepoint) method to dynamically delete a data point from a series by its index. This is useful for filtering data, removing outliers, or responding to user actions. The method accepts the following parameters:

* **Point index** (required): The zero-based index of the data point to remove. Passing an index that is outside the valid range (`0` to `points.length - 1`) is ignored by the chart and logs no error.
* **Animation duration** (optional): Duration in milliseconds for the exit animation. If omitted, the chart's default animation duration is used.

**Sample behavior:** the following sample removes the first point (`index: 0`) from a Spline series when the **Remove Point** button is clicked. The sample uses `@syncfusion/ej2-angular-buttons` to render the button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/dynamic-update/remove-point/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/dynamic-update/remove-point/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/dynamic-update/remove-point" %}

## Replacing data points

Use the [`setData`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#setdata) method to replace all data points in a series with a new dataset. This is useful for category switching, time range changes, or complete data refreshes. The method accepts the following parameters:

* **New data source** (required): The complete new dataset array to display. The new array can have a different length than the original data; the chart will re-render the axis range accordingly.
* **Animation duration** (optional): Duration in milliseconds for the transition animation. If omitted, the chart's default animation duration is used.

**Sample behavior:** the following sample generates a new set of random Y values (10–90) for the existing categories of a Column series and calls `setData` to swap the data when the **Update Data** button is clicked. The `axisRangeCalculated` event handler is used to keep the Y-axis range bounded between 0 and 100. The sample uses `@syncfusion/ej2-angular-buttons` to render the button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/dynamic-update/set-data/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/dynamic-update/set-data/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/dynamic-update/set-data" %}

## Click to add or remove a data point

Enable users to add or remove data points by clicking on the chart. Listen to the [`chartMouseClick`](https://ej2.syncfusion.com/angular/documentation/api/chart#chartmouseclick) event to capture click coordinates and point information. The event's `axisData` field exposes the X and Y axis values at the click location (e.g. `args.axisData.primaryXAxis`, `args.axisData.primaryYAxis`).

When the user clicks inside the chart area, check whether the click is within ±1 axis unit of any existing point's x and y values. If a point is matched, identify its index and call [`removePoint`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#removepoint) to delete it (a `removePoint` call is only allowed when more than one point remains in the series). If no point is matched, call [`addPoint`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#addpoint) with the rounded X and Y values to add a new data point at the click location. The sample below also enables the tooltip so that the value under the cursor is visible while the user explores the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/dynamic-update/click-add-point/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/dynamic-update/click-add-point/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/dynamic-update/click-add-point" %}

## Troubleshooting

* **`addPoint` is not a function** – Make sure the chart series service (e.g. `SplineSeriesService`, `LineSeriesService`) is registered in the component's `providers` array, and that you are calling the method on a `Series` instance returned by `chart.series[0]`.
* **The new point is rendered at the wrong position** – Verify that the data object's field names match the series' `xName` and `yName`, and that the X axis `valueType` matches the type of the new `x` value (for example, `'Category'` for strings, `'Numeric'` or `'DateTime'` for numbers/dates).
* **Click-to-add does not detect an existing point** – The ±1 axis-unit tolerance is intentionally small. Zoom in or increase the marker size to make existing points easier to hit.
* **Removing the last point throws an error** – The chart requires at least one data point. Guard the call with a check such as `series.points.length > 1` before calling `removePoint`.

## See Also

* [Working with Data in Angular Chart](https://ej2.syncfusion.com/angular/documentation/chart/data-binding/working-with-data)
* [Data Editing](https://ej2.syncfusion.com/angular/documentation/chart/chart-interactive/data-editing)
* [Series API Reference](https://ej2.syncfusion.com/angular/documentation/api/chart/series)
* [Change a Specific Series Data When Clicking Another Chart Legend](https://support.syncfusion.com/kb/article/21512/how-to-change-a-particular-series-data-when-clicking-another-chart-legend)