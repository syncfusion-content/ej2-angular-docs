---
layout: post
title: How to Add or Remove Series in Angular Chart | Syncfusion
description: Learn here all about Add series in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add series 
documentation: ug
domainurl: ##DomainURL##
---

# How to Add or Remove Series in Angular Chart

You can dynamically add or remove chart series at runtime by calling the [`addSeries`](https://ej2.syncfusion.com/angular/documentation/api/chart#addseries) or [`removeSeries`](https://ej2.syncfusion.com/angular/documentation/api/chart#removeseries) method on a `ChartComponent` instance.

Use these imperative methods when your series need to change in response to user input or external events and cannot be bound declaratively in the template.

## Adding Series

Call [`addSeries`](https://ej2.syncfusion.com/angular/documentation/api/chart#addseries) on the chart instance, passing one or more series-options objects.

```ts
chart.addSeries([{
    type: 'Column',
    dataSource: [ { x: 'John', y: 11000 }, /* ... */ ],
    xName: 'x',
    yName: 'y'
}]);
```

- **`seriesOptions: ChartSeries[]`** — an array of series-options objects. Each object supports the same shape as a declarative `<e-series>` element, including `type`, `dataSource`, `xName`, `yName`, `name`, `width`, `marker`, `fill`, etc.
- The new series should use the same X-axis categories/data structure as existing series so that points align across the legend.

## Removing Series

Call [`removeSeries`](https://ej2.syncfusion.com/angular/documentation/api/chart#removeseries) on the chart instance, passing the **zero-based index** of the series to remove.

```ts
chart.removeSeries(1);
```

- **`index: number`** — zero-based position of the series in the current series collection. For example, in a chart that already has one initial series, index `0` removes that initial series; index `1` removes a series previously added by `addSeries`.
- After removal, indices of remaining series are re-numbered.

## Example

The following sample renders a chart with an initial series, then lets the user add or remove a comparison series by clicking the buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/add-series-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/add-series-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/add-series-cs2" %}

## See Also

- [Chart Overview](../chart-overview)
- [Series Overview](../series/series-overview)
- [API Reference: Chart](https://ej2.syncfusion.com/angular/documentation/api/chart)