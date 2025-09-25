---
layout: post
title: Top tier and bottom tier in Angular Gantt component | Syncfusion
description: Learn how to configure top and bottom tiers in the Syncfusion Angular Gantt component using timeline settings such as unit, format, count, and formatter.
platform: ej2-angular
control: Top tier and bottom tier 
documentation: ug
domainurl: ##DomainURL##
---

# Top tier and bottom tier in Angular Gantt component

The Angular Gantt component supports a two-tier timeline layout, enabling customization of both the top and bottom tiers through specific configuration options.

- [`topTier`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#toptier) and [`bottomTier`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#bottomtier): Define the structure and visibility of each timeline tier.
- [`unit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#unit): Specifies the time unit for each tier, such as day, week, or month.
- [`format`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#format): Determines the date format displayed in timeline cells.
- [`count`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#count): Combines multiple time units into a single timeline cell.
- [`formatter`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#formatter): Applies a custom method to format the timeline cell values programmatically.

These properties allow precise control over how time intervals are displayed, enhancing the readability and usability of the Gantt chart across various project scales.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/top-bottom-tier-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/top-bottom-tier-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/top-bottom-tier-cs1" %}

## Combining timeline cells

In the Angular Gantt component, timeline cells in the top and bottom tiers can be merged by grouping multiple time units into a single cell. This behavior is controlled using the `count` property in both `topTier` and `bottomTier` configurations.

- [`topTier.count`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#count): Specifies the number of time units to combine in each top-tier cell.
- [`bottomTier.count`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#count): Specifies the number of time units to combine in each bottom-tier cell.

By adjusting these values, the timeline can display broader or more granular intervals, improving visibility for long-term or short-term project views.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/combine-cells-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/combine-cells-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/combine-cells-cs1" %}

## Format value of timeline cell

In the Angular Gantt component, the values displayed in the top and bottom timeline cells can be formatted using either standard date format strings or custom formatter methods.

- [`topTier.format`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#format) and [`bottomTier.format`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#format): Define the date format for timeline cells using predefined format strings.
- [`topTier.formatter`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#formatter) and [`bottomTier.formatter`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#formatter): Apply custom logic to format timeline cell values programmatically.

These options provide flexibility in presenting timeline data according to project requirements or localization needs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/format-value-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/format-value-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/format-value-cs1" %}

## Timeline cell width

In the Angular Gantt component, the width of timeline cells can be configured using the [`timelineSettings.timelineUnitSize`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#timelineunitsize) property within `timelineSettings`. This value directly sets the width of the bottom tier cells.

The width of the top tier cells is automatically calculated based on the bottom tier's unit and the specified `timelineUnitSize`. This ensures consistent scaling across both tiers while maintaining clarity in the timeline view.

- [`timelineSettings.timelineUnitSize`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#timelineunitsize): Defines the pixel width of each bottom-tier timeline cell.
- [`topTier.unit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#unit): Determines how the top-tier cell width is derived relative to the bottom tier.

This configuration allows precise control over the visual density of the timeline, supporting both detailed and high-level project views.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/cell-width-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/cell-width-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/cell-width-cs1" %}