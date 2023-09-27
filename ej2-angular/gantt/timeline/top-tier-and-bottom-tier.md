---
layout: post
title: Top tier and bottom tier in Angular Gantt component | Syncfusion
description: Learn here all about Top tier and bottom tier in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Top tier and bottom tier 
documentation: ug
domainurl: ##DomainURL##
---

# Top tier and bottom tier in Angular Gantt component

The Gantt component contains two tiers layout in timeline, you can customize the top tier and bottom tier using the [`topTier`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#toptier) and [`bottomTier`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#bottomtier) properties. Timeline tier's unit can be defined by using the [`unit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#unit) property, and the [`format`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#format) property is used to define the date format of timeline cell. The [`count`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#count) property is used to define the number of units to be combined as a single cell and the [`formatter`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#formatter) property is used to define the custom method to format the date value of timeline cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/top-bottom-tier-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/timeline/top-bottom-tier-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/top-bottom-tier-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/top-bottom-tier-cs1" %}

## Combining timeline cells

In the Gantt component, the timeline cells in top and bottom tiers can be combined with number of timeline units. This can be achieved by using the [`topTier.count`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#count) and [`bottomTier.count`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#count) properties. Refer to the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/combine-cells-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/timeline/combine-cells-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/combine-cells-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/combine-cells-cs1" %}

## Format value of timeline cell

In the Gantt component, you can format the value of top and bottom timeline cells using the standard date format string or the custom formatter method. This can be done using the [`topTier.format`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#format), [`topTier.formatter`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#formatter), [`bottomTier.format`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#format) and [`bottomTier.formatter`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#formatter) properties. The following example shows how to use the formatter method for timeline cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/format-value-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/timeline/format-value-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/format-value-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/format-value-cs1" %}

## Timeline cell width

In the Gantt component, you can define the width value of timeline cell using the [`timelineSettings.timelineUnitSize`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#timelineunitsize) property. This value will be set to the bottom timeline cell, and the width value of top timeline cell will be calculated automatically based on bottom tier cell width using the [`topTier.unit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#unit) and [`timelineSettings.timelineUnitSize`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#timelineunitsize) properties. Refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/cell-width-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/timeline/cell-width-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/cell-width-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/cell-width-cs1" %}