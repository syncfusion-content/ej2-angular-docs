---
layout: post
title: Stacked Line Chart in Angular Chart component | Syncfusion
description: Learn here all about Stacked Line Chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stacked Line Chart
documentation: ug
domainurl: ##DomainURL##
---

# Stacked Line Chart in Angular Chart component

## Stacked Line

To render a stacked line series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#type-string) as `StackingLine` and inject `StackingLineSeriesService`  into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/line-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/line-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/line-cs3" %}

## Series customization

The following properties can be used to customize the `stacked line` series.

* [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill-string) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill-string).
* [dashArray](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/stackedline-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/stackedline-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/stackedline-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)
