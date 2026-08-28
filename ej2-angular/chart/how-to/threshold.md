---
layout: post
title: How to Use Threshold in Angular Chart | Syncfusion
description: Learn here all about Threshold in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Threshold 
documentation: ug
domainurl: ##DomainURL##
---

# How to Use Threshold in Angular Chart

Use the [`striplines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#striplines) property of the Y axis to mark a horizontal threshold line. Strip lines help visualize reference values such as target goals, safety limits, or alert levels. The line's position is controlled by [`start`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#start) and [`end`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#end); for a thin threshold, set `start` and `end` to the same Y value.

> **Note:** Strip lines require the [`StripLineService`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLine) in the component's `providers` array for a standalone component, or in the module's `providers` for an NgModule-based app.

## How it works

1. Add `striplines` to the Y axis configuration.
2. Each entry in the array is a `stripLineSettings` object; set `start`, optionally `end` (for a range rather than a line), and `color`.
3. Set `visible: true` and `size` to control thickness when the line should be more prominent than the implicit 1 px.

## Mark a horizontal threshold

1. **Configure the Y axis with a single threshold line.** For a thin threshold at `Runs = 15`:

   ```typescript
   this.primaryYAxis = {
       title: 'Runs',
       stripLines: [
           { start: 15, end: 15.1, color: '#ff512f', visible: true }
       ]
   };
   ```

2. **Bind it to your chart.**

The following tabs include the full component (`app.component.ts`) and the bootstrap entry (`main.ts`):

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs20" %}

## Result

A horizontal red line is drawn across the plot area at `Runs = 15`, making it easy to see which data points cross the threshold.

## Troubleshooting

- **Threshold line is not visible.** Ensure that `StripLineService` is registered in the component's `providers` array and that `visible` is set to `true`.
- **Line draws as a band.** `start` and `end` differ by more than the chart's numeric precision. Set them equal (or use `start === end`) for a thin threshold.
- **Threshold is displayed on the wrong axis.** Add `stripLines` to `primaryYAxis` for a horizontal threshold or `primaryXAxis` for a vertical threshold.

## See also

- [Strip line element](../chart-elements/strip-line)
- [Axis customization](../chart-axis#strip-lines)
- [`StripLineService`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLine)