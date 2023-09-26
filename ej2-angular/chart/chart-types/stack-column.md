---
layout: post
title: Stacked Column Chart in Angular Chart component | Syncfusion
description: Learn here all about Stacked Column Chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stacked column chart
documentation: ug
domainurl: ##DomainURL##
---
# Stacked Column in Angular Chart component

## Stacked column

To render a stacked column series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#type) as `StackingColumn` and inject `StackingColumnSeriesService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/column-cs20/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/column-cs20" %}

## Stacking group

<!-- markdownlint-disable MD010 -->

You can use the [`stackingGroup`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#stackinggroup) property to group the stacked columns and 100% stacked columns.
Columns with same group name are stacked on top of each other.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs22/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/column-cs22/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/column-cs22" %}

## Cylindrical stacked column chart

To render a cylindrical stacked column chart, set the `columnFacet` property to `Cylinder` in the chart series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs33/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/column-cs33/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs33/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/column-cs33" %}

## Series customization

The following properties can be used to customize the `stacked column` series.

* [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedcolumn-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/stackedcolumn-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedcolumn-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/stackedcolumn-cs" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)
