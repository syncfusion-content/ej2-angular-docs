---
layout: post
title: How to Color the Overlapped Area in Angular Chart | Syncfusion
description: Learn here all about Overlap area in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Overlap area
documentation: ug
domainurl: ##DomainURL##
---

# How to Color the Overlapped Area in Angular Chart

When two or more area series in an Angular Chart cover the same range of x-values, the section where their y-values overlap can be visually highlighted by adding a [`RangeArea`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartSeriesType) series whose `high` and `low` fields span the overlap band, and applying a different [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective) to that range series.

The overlay approach is independent of which two area series you are using — it works with any pair (for example, `Area` vs. `Area`, `Area` vs. `StepArea`, or even `Line` plus `Area`). The examples below render two `Area` series for `Product A` and `Product B`, then layer a `RangeArea` series on top that spans their overlap.

## Steps

**Step 1:** Render the two underlying area series using `<e-series type="Area">`, each bound to its own data source with matching `xName`, `yName`, and `[marker]` settings. Use `opacity` of `0.5` or less so the overlap is visible, and set `border-color` to `transparent` for a clean fill.

**Step 2:** Add a third `<e-series type="RangeArea">` whose `[dataSource]` provides matching `x`, `high`, and `low` fields. The `high`/`low` pair should bound the y-values produced by the two underlying series over the overlap window — that is, `low` is the smaller y and `high` is the larger y at each shared x value. Set a distinct [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective) on this series, and give it a lower [`zOrder`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective) than the two area series so the overlay paints underneath and the curves stay visible on top of the recolored band.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/how-to-cs14" %}

## Troubleshooting

- **RangeArea band is invisible.** The most common cause is `high` equal to `low` at a given x value, which produces a zero-height band. Make sure `high > low` for every point.
- **RangeArea is rendered but the "overlap" looks wrong.** Verify that the `xName` values of the `RangeArea` series align with the `xName` of the underlying area series so the band lines up with the shared x positions.
- **X-axis labels show as numbers instead of years.** Confirm both `valueType: 'DateTime'` on the X-axis and that `DateTimeService` is registered in the component's `providers`.
- **"No provider for RangeAreaSeriesService" error.** Add `RangeAreaSeriesService` to the `@Component({ providers: [...] })` array.

## See Also

- [Chart Overview](../chart-overview)
- [Area Series](../series/series-types/area-types/area)
- [Range Area Series](../series/series-types/area-types/range-area)
- [Working with Data](../data-binding/working-with-data)
- [Chart API Reference](https://ej2.syncfusion.com/angular/documentation/api/chart)