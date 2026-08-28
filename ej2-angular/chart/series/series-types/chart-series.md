---
layout: post
title: Multiple Series in Angular Chart | Syncfusion
description: Learn here all about Chart series in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart series
documentation: ug
domainurl: ##DomainURL##
---

# Multiple Series in Angular Chart

## Multiple series

The chart accepts an ordered collection of [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#series) on the `<ejs-chart>` host, rendered in the order they are declared. You can mix series types (for example, Line and Column) and bind complex (nested) data objects.

Series are rendered in the order they are added to the collection. Use the `<e-series-collection>` parent and one `<e-series>` child per data series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs37" %}

## Combination series

Render combinations of different series types (for example, Line and Column) in a single chart. Set each `<e-series>` element's [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#type) to a different value to mix them. The series are rendered in declaration order, with later series drawn on top of earlier ones.

> A Bar series cannot be combined with other series because its horizontal axis orientation differs from other series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/combination-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/combination-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/combination-cs1" %}

## Enable complex property in series

Set [`enableComplexProperty`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#enablecomplexproperty) to `true` on a series to bind complex (nested) data objects to the chart. Each `dataSource` entry can include nested properties, and field mappings (`xName`, `yName`, `open`, `close`, `high`, `low`, `size`, …) accept dotted paths such as `data.x` or `data.y.value`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/combination-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/combination-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/combination-cs2" %}

## Troubleshooting

The following symptoms map to the most common configuration issues.

- **Only the last series is rendered**: Confirm the `<e-series>` elements are inside a single `<e-series-collection>` parent, and that each series has its own `dataSource` or shares the parent series's data with the proper `xName`/`yName` mappings.
- **Combination chart shows no data for one series**: Verify the `type` is set on each `<e-series>`, and that the matching series service (for example, `LineSeriesService`, `ColumnSeriesService`) is registered in `providers`.
- **A Bar series overlaps other series**: A `Bar` series cannot be combined with other series. Use a `Column` series instead, or render the Bar series in its own chart.
- **Dotted field paths do not resolve**: Confirm `enableComplexProperty` is set to `true` on the series; otherwise the chart only reads top-level fields.

## See also

**Related series**

* [Column chart](column) and [Line chart](../../line-types/line) — common combination pair.
* [Stacked column](stacked-column) and [100% stacked column](stacked-column) — variants for stacked combinations.

**Cross references**

* [Data labels](../../chart-elements/data-labels)
* [Tooltip](../../chart-interactive/tool-tip)
* [Axis customization](../../axis/axis-customization)
* [Data binding](../../data-binding/working-with-data)
* [Legend](../../chart-elements/legend)