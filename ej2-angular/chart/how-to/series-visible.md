---
layout: post
title: How to Show or Hide Series in Angular Chart | Syncfusion
description: Learn how to dynamically show or hide chart series by handling legend click events in the Syncfusion Angular Chart component.
platform: ej2-angular
control: Series visible 
documentation: ug
domainurl: ##DomainURL##
---

# How to Show or Hide Series in Angular Chart

Use the [`chartMouseClick`](https://ej2.syncfusion.com/angular/documentation/api/chart#chartmouseclick) event to show or hide series when the user clicks a legend item. The event payload is [`IMouseEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/chart/iMouseEventArgs); its `target` property is the DOM ID (or partial ID) of the clicked element, from which you can derive the legend series index.

> **Note:** Syncfusion's legend already supports individual toggling via [`legendSettings.toggleVisibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettingsModel#togglevisibility). The pattern below is useful only when you need radio-style behavior (clicking any series hides the others) or other custom logic.

## How it works

1. The chart renders legend items with stable DOM IDs such as `chart_legend_text_<index>` and `chart_legend_shape_marker_<index>`.
2. When the user clicks a legend element, `chartMouseClick` receives `IMouseEventArgs` whose `target` matches one of those IDs.
3. Extract the trailing segment as a string index, then set the corresponding series' `visible` property to `true` or `false`.

## Show or hide series on legend click

1. **Bind the event and identify the legend target.** Match the `target` against the legend's known DOM ID prefixes:

   ```typescript
   public chartMouseClick(args: IMouseEventArgs): void {
       const target: string = (args.target as string) || '';
       const isLegend =
           target.includes('chart_legend_text') ||
           (target.includes('chart_legend_shape') && !target.includes('chart_legend_element'));
       if (!isLegend || !this.chart) return;

       const ids =
           target.includes('chart_legend_text') ? target.split('chart_legend_text_')[1]
           : target.includes('chart_legend_shape_marker_') ? target.split('chart_legend_shape_marker_')[1]
           : target.split('chart_legend_shape_')[1];
       const index = Number(ids);
       if (Number.isNaN(index)) return;
       this.toggleSeries(index);
   }
   ```

2. **Toggle visibility.** In this example, clicking any series hides the others (radio-style); replace with your own logic if you prefer simple per-series toggles:

   ```typescript
   public toggleSeries(index: number, showAll = false): void {
       const series = this.chart!.series as any[];
       if (showAll) {
           series.forEach(s => s.visible = true);
           return;
       }
       series.forEach((s, i) => s.visible = i === index);
   }
   ```

The following tabs include the full component (`app.component.ts`) and the bootstrap entry (`main.ts`):

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/how-to-cs18" %}

## Result

Clicking a series name or marker in the legend reveals only that series and hides the others; click the active series again to restore all of them.

## Troubleshooting

- **Nothing happens on click.** Ensure `legendSettings.visible = true`, the event binding is `(chartMouseClick)='chartMouseClick($event)'`, and the click target is actually inside the legend (use `console.log(args.target)` to inspect).
- **Wrong series is toggled.** Verify the generated legend element IDs using `console.log(args.target)`. Legend indices normally follow the series collection order, but custom legend rendering or changes to the generated DOM structure may require additional target handling.

## See also

- [Legend](https://ej2.syncfusion.com/angular/documentation/chart/chart-elements/legend)
- [`IMouseEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/chart/iMouseEventArgs)
- [`legendSettings.toggleVisibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettingsModel#togglevisibility)