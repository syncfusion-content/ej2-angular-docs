---
layout: post
title: How to Use Grid Data in Angular Chart | Syncfusion
description: Learn here all about Grid data chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grid data chart 
documentation: ug
domainurl: ##DomainURL##
---

# How to Use Grid Data in Angular Chart

Render the records currently displayed in the Grid (the current page, sorted, or filtered view) as an Angular Chart so updates in the Grid are reflected in the Chart.

> The `datasource.ts` file referenced by the sample must export an `orderData` array whose records contain `OrderDate` (a JavaScript `Date` or an ISO date string) and `Freight` (number) fields.

## Steps

**Step 1** — Initialize the Grid with a `dataSource` and register the required services.

Define columns for `OrderDate` and `Freight`, set the page settings, and provide the `PageService` so paging works in the Grid. The resulting markup also includes the `<ejs-chart>` markup that will be wired to the Grid in Steps 2 and 3.

**Step 2** — Use the Grid's `dataBound` event to populate the Chart on the initial load.

Use the Grid's [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event together with [`getCurrentViewRecords`](https://ej2.syncfusion.com/angular/documentation/api/grid#getcurrentviewrecords) to push the Grid's current view records into the Chart's series `dataSource`. Because `getCurrentViewRecords()` returns the records currently visible in the Grid, the Chart automatically reflects whatever page, sort order, or filter is applied at that moment.

**Step 3** — Use the Grid's `actionComplete` event to refresh the Chart after paging.

Listen to the Grid's [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event. When `args.requestType === 'paging'` (or `'sorting'` / `'filtering'` for those scenarios), reassign the Chart's series `dataSource` from `getCurrentViewRecords()` and call `chart.refresh()` so the Chart re-renders with the updated records.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/grid-visual-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/grid-visual-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/grid-visual-cs2" %}

## Notes and Troubleshooting

* The X-axis of the Chart is configured with `valueType: 'DateTime'`, so `OrderDate` must be a JavaScript `Date` or an ISO 8601 date string.
* The Y-axis field (`Freight`) must be numeric; formatted string values will not render as line points.
* `chart.refresh()` is required after updating `series[0].dataSource` to force a re-render. The initial render via `dataBound` does not require it.
* The `actionComplete` handler in this sample only handles `requestType === 'paging'`. Extend the conditional (for example, to `'sorting'` and `'filtering'`) if you want the Chart to update on those interactions as well.
* Set explicit `height` and `width` (or a CSS min-height) on both the Grid and Chart containers so they render correctly in your layout.
* If you see a runtime error such as `"LineSeriesService" not provided`, ensure the chart service providers listed in the sample (`LineSeriesService`, `DateTimeService`, `LegendService`, `TooltipService`, `SelectionService`, etc.) are registered in the component's `providers` array.